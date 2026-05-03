import assert from 'node:assert/strict';
import test from 'node:test';
import { validateAppointmentPayload } from '../src/validation.js';

test('accepts a valid appointment payload', () => {
  const result = validateAppointmentPayload({
    fullName: 'Ion Popescu',
    phone: '+40 700 000 000',
    email: 'ion@example.com',
    service: 'Consultatie la domiciliu',
    preferredDate: '2099-05-20',
    preferredTime: '14:30',
    message: 'Prefer dupa-amiaza.',
  });

  assert.equal(result.isValid, true);
  assert.equal(result.value.fullName, 'Ion Popescu');
  assert.equal(result.value.email, 'ion@example.com');
});

test('rejects invalid fields', () => {
  const result = validateAppointmentPayload({
    fullName: 'I',
    phone: 'abc',
    email: 'invalid',
    preferredDate: '2020-01-01',
    preferredTime: '28:99',
  });

  assert.equal(result.isValid, false);
  assert.equal(result.errors.fullName, 'Numele complet trebuie sa aiba intre 2 si 120 de caractere.');
  assert.equal(result.errors.phone, 'Numarul de telefon este invalid.');
  assert.equal(result.errors.email, 'Adresa de email este invalida.');
  assert.equal(result.errors.preferredDate, 'Data programarii nu poate fi in trecut.');
  assert.equal(result.errors.preferredTime, 'Ora programarii trebuie sa fie in format HH:mm.');
});

test('accepts frontend-friendly aliases', () => {
  const result = validateAppointmentPayload({
    name: 'Maria Ionescu',
    phone: '0712345678',
    appointmentDate: '2099-01-10',
    appointmentTime: '09:00',
  });

  assert.equal(result.isValid, true);
  assert.equal(result.value.fullName, 'Maria Ionescu');
  assert.equal(result.value.preferredDate, '2099-01-10');
  assert.equal(result.value.preferredTime, '09:00');
});
