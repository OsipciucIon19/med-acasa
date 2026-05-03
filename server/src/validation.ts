import { APPOINTMENT_FIELD_LIMITS } from '../../shared/appointments.js';
import type { AppointmentRequest } from '../../shared/appointments.js';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9\s().-]{7,25}$/;
const TIME_PATTERN = /^([01]\d|2[0-3]):[0-5]\d$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

type LegacyAppointmentPayload = Partial<AppointmentRequest> & {
  name?: unknown;
  appointmentDate?: unknown;
  date?: unknown;
  appointmentTime?: unknown;
  time?: unknown;
};

export type ValidatedAppointment =
  | {
      isValid: true;
      errors: Record<string, never>;
      value: AppointmentRequest;
    }
  | {
      isValid: false;
      errors: Partial<Record<keyof AppointmentRequest, string>>;
      value: null;
    };

function asTrimmedString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function normalizeDate(value: unknown): string | null {
  const text = asTrimmedString(value);

  if (!DATE_PATTERN.test(text)) {
    return null;
  }

  const date = new Date(`${text}T00:00:00.000Z`);
  const isRealDate = !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === text;

  return isRealDate ? text : null;
}

function isPastDate(dateText: string): boolean {
  const today = new Date();
  const todayUtc = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  const requestedUtc = Date.parse(`${dateText}T00:00:00.000Z`);

  return requestedUtc < todayUtc;
}

export function validateAppointmentPayload(payload: unknown): ValidatedAppointment {
  const errors: Partial<Record<keyof AppointmentRequest, string>> = {};
  const source = payload && typeof payload === 'object' && !Array.isArray(payload)
    ? payload as LegacyAppointmentPayload
    : {};

  const fullName = asTrimmedString(source.fullName || source.name);
  const phone = asTrimmedString(source.phone);
  const email = asTrimmedString(source.email);
  const service = asTrimmedString(source.service);
  const preferredDate = normalizeDate(source.preferredDate || source.appointmentDate || source.date);
  const preferredTime = asTrimmedString(source.preferredTime || source.appointmentTime || source.time);
  const message = asTrimmedString(source.message);
  const appointmentSource = asTrimmedString(source.source) || 'website';

  if (
    fullName.length < APPOINTMENT_FIELD_LIMITS.fullNameMinLength
    || fullName.length > APPOINTMENT_FIELD_LIMITS.fullNameMaxLength
  ) {
    errors.fullName = `Numele complet trebuie sa aiba intre ${APPOINTMENT_FIELD_LIMITS.fullNameMinLength} si ${APPOINTMENT_FIELD_LIMITS.fullNameMaxLength} de caractere.`;
  }

  if (!PHONE_PATTERN.test(phone)) {
    errors.phone = 'Numarul de telefon este invalid.';
  }

  if (email && !EMAIL_PATTERN.test(email)) {
    errors.email = 'Adresa de email este invalida.';
  }

  if (service.length > APPOINTMENT_FIELD_LIMITS.serviceMaxLength) {
    errors.service = `Serviciul ales trebuie sa aiba maximum ${APPOINTMENT_FIELD_LIMITS.serviceMaxLength} de caractere.`;
  }

  if (!preferredDate) {
    errors.preferredDate = 'Data programarii trebuie sa fie in format YYYY-MM-DD.';
  } else if (isPastDate(preferredDate)) {
    errors.preferredDate = 'Data programarii nu poate fi in trecut.';
  }

  if (preferredTime && !TIME_PATTERN.test(preferredTime)) {
    errors.preferredTime = 'Ora programarii trebuie sa fie in format HH:mm.';
  }

  if (message.length > APPOINTMENT_FIELD_LIMITS.messageMaxLength) {
    errors.message = `Mesajul trebuie sa aiba maximum ${APPOINTMENT_FIELD_LIMITS.messageMaxLength} de caractere.`;
  }

  if (Object.keys(errors).length > 0) {
    return {
      isValid: false,
      errors,
      value: null,
    };
  }

  return {
    isValid: true,
    errors: {},
    value: {
      fullName,
      phone,
      email: email || null,
      service: service || null,
      preferredDate: preferredDate as string,
      preferredTime: preferredTime || null,
      message: message || null,
      source: appointmentSource,
    },
  };
}
