import { APPOINTMENTS_API_PATH } from '../../../shared/appointments.js';
import type {
    AppointmentAcceptedResponse,
    AppointmentErrorResponse,
    AppointmentRequest,
} from '../../../shared/appointments.js';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

export async function createAppointment(payload: AppointmentRequest): Promise<AppointmentAcceptedResponse> {
    const response = await fetch(`${API_BASE_URL}${APPOINTMENTS_API_PATH}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const data = (await response.json()) as AppointmentAcceptedResponse | AppointmentErrorResponse;

    if (!response.ok) {
        const message = 'message' in data ? data.message : 'Programarea nu a putut fi trimisa.';
        throw new AppointmentApiError(message, response.status, data as AppointmentErrorResponse);
    }

    return data as AppointmentAcceptedResponse;
}

export class AppointmentApiError extends Error {
    readonly statusCode: number;
    readonly response: AppointmentErrorResponse;

    constructor(message: string, statusCode: number, response: AppointmentErrorResponse) {
        super(message);
        this.name = 'AppointmentApiError';
        this.statusCode = statusCode;
        this.response = response;
    }
}
