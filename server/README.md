# Med Acasa API

API Node pentru primirea programarilor din frontend si notificarea interna prin Amazon SES.

## Pornire locala

```bash
cd server
cp .env.example .env
npm install
npm run dev
```

Implicit, `EMAIL_DELIVERY_MODE=log`, deci emailurile sunt afisate in consola si nu sunt trimise prin AWS.
Pentru modul local `log`, serverul foloseste doar module native Node. `npm install` este necesar pentru productie, cand activezi `EMAIL_DELIVERY_MODE=ses`.

## Endpoint

`POST /api/appointments`

Ruta si tipurile payload/response sunt definite in `../shared/appointments`.

Exemplu payload:

```json
{
  "fullName": "Ion Popescu",
  "phone": "+40 700 000 000",
  "email": "ion@example.com",
  "service": "Consultatie la domiciliu",
  "preferredDate": "2026-05-20",
  "preferredTime": "14:30",
  "message": "Prefer dupa-amiaza."
}
```

Aliasuri acceptate pentru frontend:

- `name` pentru `fullName`
- `appointmentDate` sau `date` pentru `preferredDate`
- `appointmentTime` sau `time` pentru `preferredTime`

Raspuns pentru request valid:

```json
{
  "status": "accepted",
  "message": "Programarea a fost primita.",
  "notification": {
    "deliveryMode": "log",
    "messageId": null
  }
}
```

## Configurare Amazon SES

Pentru productie:

```env
EMAIL_DELIVERY_MODE=ses
AWS_REGION=eu-central-1
SES_FROM_EMAIL=programari@medacasa.ro
INTERNAL_APPOINTMENTS_EMAIL=programari@medacasa.ro
ALLOWED_ORIGINS=https://medacasa.ro
```

In AWS SES trebuie verificata identitatea expeditorului, preferabil domeniul `medacasa.ro`. Daca contul SES este in sandbox, trebuie cerut production access sau verificati si destinatarii.

Credentialele AWS nu se pun in cod. Ruleaza serverul pe infrastructura AWS cu rol IAM sau configureaza local variabilele standard `AWS_ACCESS_KEY_ID` si `AWS_SECRET_ACCESS_KEY` doar pentru dezvoltare.
