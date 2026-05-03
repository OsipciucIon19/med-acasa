import type { AppointmentRequest, AppointmentAcceptedResponse } from '../../shared/appointments.js';
import { config } from './config.js';
import { buildAppointmentEmail } from './emailTemplate.js';

type EmailResult = AppointmentAcceptedResponse['notification'];

export async function sendAppointmentEmail(appointment: AppointmentRequest): Promise<EmailResult> {
  const email = buildAppointmentEmail(appointment);

  if (config.emailDeliveryMode === 'log') {
    console.info('Appointment email delivery is in log mode.', {
      to: config.internalAppointmentsEmail || 'not-configured',
      from: config.sesFromEmail || 'not-configured',
      subject: email.subject,
      appointment,
    });

    return { deliveryMode: 'log', messageId: null };
  }

  const { SESClient, SendEmailCommand } = await import('@aws-sdk/client-ses');
  const sesClient = new SESClient({ region: config.awsRegion });
  const command = new SendEmailCommand({
    Source: config.sesFromEmail,
    Destination: {
      ToAddresses: [config.internalAppointmentsEmail],
    },
    Message: {
      Subject: {
        Data: email.subject,
        Charset: 'UTF-8',
      },
      Body: {
        Text: {
          Data: email.text,
          Charset: 'UTF-8',
        },
        Html: {
          Data: email.html,
          Charset: 'UTF-8',
        },
      },
    },
  });

  const result = await sesClient.send(command);

  return { deliveryMode: 'ses', messageId: result.MessageId || null };
}
