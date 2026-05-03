import type { AppointmentRequest } from '../../shared/appointments.js';

interface AppointmentEmail {
  subject: string;
  text: string;
  html: string;
}

function optionalLine(label: string, value: string | null | undefined): string {
  return value ? `${label}: ${value}\n` : '';
}

export function buildAppointmentEmail(appointment: AppointmentRequest): AppointmentEmail {
  const subject = `Programare noua: ${appointment.fullName}`;
  const text = [
    'A fost trimisa o programare noua prin website.',
    '',
    `Nume: ${appointment.fullName}`,
    `Telefon: ${appointment.phone}`,
    optionalLine('Email', appointment.email).trimEnd(),
    optionalLine('Serviciu', appointment.service).trimEnd(),
    `Data preferata: ${appointment.preferredDate}`,
    optionalLine('Ora preferata', appointment.preferredTime).trimEnd(),
    optionalLine('Mesaj', appointment.message).trimEnd(),
    `Sursa: ${appointment.source}`,
    '',
    'Recomandare: evita includerea datelor medicale sensibile in emailuri operationale.',
  ].filter(Boolean).join('\n');

  const htmlRows = [
    ['Nume', appointment.fullName],
    ['Telefon', appointment.phone],
    ['Email', appointment.email],
    ['Serviciu', appointment.service],
    ['Data preferata', appointment.preferredDate],
    ['Ora preferata', appointment.preferredTime],
    ['Mesaj', appointment.message],
    ['Sursa', appointment.source],
  ].filter(([, value]) => Boolean(value)) as Array<[string, string]>;

  const html = `
    <h2>Programare noua prin website</h2>
    <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#d1d5db;">
      ${htmlRows.map(([label, value]) => `
        <tr>
          <th align="left" style="background:#f3f4f6;">${escapeHtml(label)}</th>
          <td>${escapeHtml(value)}</td>
        </tr>
      `).join('')}
    </table>
    <p><strong>Recomandare:</strong> evita includerea datelor medicale sensibile in emailuri operationale.</p>
  `;

  return { subject, text, html };
}

function escapeHtml(value: string): string {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
