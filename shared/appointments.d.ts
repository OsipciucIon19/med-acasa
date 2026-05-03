export const APPOINTMENTS_API_PATH: '/api/appointments';

export const APPOINTMENT_FIELD_LIMITS: {
  fullNameMinLength: 2;
  fullNameMaxLength: 120;
  serviceMaxLength: 120;
  messageMaxLength: 2000;
  maxJsonBodyBytes: number;
};

export interface AppointmentRequest {
  fullName: string;
  phone: string;
  email?: string | null;
  service?: string | null;
  preferredDate: string;
  preferredTime?: string | null;
  message?: string | null;
  source?: string;
}

export interface AppointmentAcceptedResponse {
  status: 'accepted';
  message: string;
  notification: {
    deliveryMode: 'log' | 'ses';
    messageId: string | null;
  };
}

export interface AppointmentErrorResponse {
  error: 'VALIDATION_ERROR' | 'INVALID_JSON' | 'PAYLOAD_TOO_LARGE' | 'CORS_FORBIDDEN' | 'INTERNAL_SERVER_ERROR' | 'NOT_FOUND';
  message: string;
  fields?: Partial<Record<keyof AppointmentRequest, string>>;
}
