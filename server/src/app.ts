import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import type { AppointmentAcceptedResponse, AppointmentErrorResponse } from '../../shared/appointments.js';
import { APPOINTMENT_FIELD_LIMITS, APPOINTMENTS_API_PATH } from '../../shared/appointments.js';
import { config } from './config.js';
import { sendAppointmentEmail } from './mailer.js';
import { validateAppointmentPayload } from './validation.js';

export function createApp() {
  return createServer(async (request, response) => {
    try {
      applySecurityHeaders(response);

      if (!applyCors(request, response)) {
        sendJson(response, 403, {
          error: 'CORS_FORBIDDEN',
          message: 'Originea requestului nu este permisa.',
        });
        return;
      }

      if (request.method === 'OPTIONS') {
        response.writeHead(204);
        response.end();
        return;
      }

      const url = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`);

      if (request.method === 'GET' && url.pathname === '/health') {
        sendJson(response, 200, { status: 'ok' });
        return;
      }

      if (request.method === 'POST' && url.pathname === APPOINTMENTS_API_PATH) {
        await handleCreateAppointment(request, response);
        return;
      }

      sendJson(response, 404, {
        error: 'NOT_FOUND',
        message: 'Endpointul nu exista.',
      });
    } catch (error) {
      console.error(error);
      const httpError = error instanceof HttpError ? error : null;
      sendJson(response, httpError?.statusCode || 500, {
        error: httpError?.code || 'INTERNAL_SERVER_ERROR',
        message: httpError?.publicMessage || 'Programarea nu a putut fi procesata.',
      });
    }
  });
}

async function handleCreateAppointment(request: IncomingMessage, response: ServerResponse) {
  const payload = await readJsonBody(request);
  const validation = validateAppointmentPayload(payload);

  if (!validation.isValid) {
    sendJson(response, 400, {
      error: 'VALIDATION_ERROR',
      message: 'Programarea nu este valida.',
      fields: validation.errors,
    });
    return;
  }

  const emailResult = await sendAppointmentEmail(validation.value);

  sendJson(response, 202, {
    status: 'accepted',
    message: 'Programarea a fost primita.',
    notification: {
      deliveryMode: emailResult.deliveryMode,
      messageId: emailResult.messageId,
    },
  });
}

function readJsonBody(request: IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let body = '';

    request.on('data', (chunk) => {
      body += chunk;

      if (body.length > APPOINTMENT_FIELD_LIMITS.maxJsonBodyBytes) {
        reject(new HttpError(413, 'PAYLOAD_TOO_LARGE', 'Requestul este prea mare.'));
        request.destroy();
      }
    });

    request.on('end', () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new HttpError(400, 'INVALID_JSON', 'Requestul trebuie sa contina JSON valid.'));
      }
    });

    request.on('error', reject);
  });
}

function applyCors(request: IncomingMessage, response: ServerResponse): boolean {
  const origin = request.headers.origin;

  response.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  response.setHeader('Vary', 'Origin');

  if (!origin) {
    return true;
  }

  if (!config.allowedOrigins.includes(origin)) {
    return false;
  }

  response.setHeader('Access-Control-Allow-Origin', origin);
  return true;
}

function applySecurityHeaders(response: ServerResponse) {
  response.setHeader('X-Content-Type-Options', 'nosniff');
  response.setHeader('Referrer-Policy', 'no-referrer');
}

function sendJson(
  response: ServerResponse,
  statusCode: number,
  payload: AppointmentAcceptedResponse | AppointmentErrorResponse | { status: 'ok' },
) {
  response.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify(payload));
}

class HttpError extends Error {
  readonly statusCode: number;
  readonly code: AppointmentErrorResponse['error'];
  readonly publicMessage: string;

  constructor(statusCode: number, code: AppointmentErrorResponse['error'], publicMessage: string) {
    super(publicMessage);
    this.statusCode = statusCode;
    this.code = code;
    this.publicMessage = publicMessage;
  }
}
