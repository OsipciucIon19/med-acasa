import LegalPage from '../components/LegalPage';

function Privacy() {
    return (
        <LegalPage
            eyebrow="Confidențialitate"
            title="Politica de confidențialitate"
            updatedAt="3 mai 2026"
            intro="Confidențialitatea ta contează pentru noi. Acest document explică ce date colectăm, de ce și cum le protejăm."
        >
            <h2>1. Cine suntem</h2>
            <p>
                <strong>MedAcasă</strong> oferă servicii medicale la domiciliu în Chișinău și suburbii. Operatorul de date cu caracter personal este MedAcasă, cu sediul în Chișinău, Republica Moldova. Pentru orice întrebare legată de prelucrarea datelor, ne poți contacta la{' '}
                <a href="mailto:contact@medacasa.md">contact@medacasa.md</a>.
            </p>

            <h2>2. Ce date colectăm</h2>
            <p>În cadrul serviciilor noastre, putem colecta următoarele categorii de date:</p>
            <ul>
                <li><strong>Date de identificare:</strong> nume, prenume, data nașterii.</li>
                <li><strong>Date de contact:</strong> număr de telefon, adresă, e-mail.</li>
                <li><strong>Date medicale:</strong> prescripția medicală, tratamentul recomandat, alergii, observații relevante pentru intervenție.</li>
                <li><strong>Date de plată:</strong> informații necesare pentru emiterea facturii (dacă este cazul).</li>
                <li><strong>Date tehnice:</strong> adresă IP, tip de dispozitiv, pagini vizitate pe site (prin cookie-uri).</li>
            </ul>

            <h2>3. De ce colectăm aceste date</h2>
            <ul>
                <li>Pentru a programa și efectua vizitele medicale solicitate.</li>
                <li>Pentru a comunica cu tine privind programarea, anularea sau confirmarea unei intervenții.</li>
                <li>Pentru a respecta obligațiile legale (păstrarea documentației medicale, facturare).</li>
                <li>Pentru a îmbunătăți calitatea serviciilor noastre.</li>
            </ul>

            <h2>4. Temeiul prelucrării</h2>
            <p>
                Prelucrăm datele tale în baza:
            </p>
            <ul>
                <li>Executării contractului de prestare a serviciilor medicale.</li>
                <li>Consimțământului tău expres pentru datele medicale.</li>
                <li>Obligațiilor legale care ne revin (Legea ocrotirii sănătății, legislația privind protecția datelor cu caracter personal).</li>
                <li>Interesului nostru legitim de a opera și îmbunătăți serviciile.</li>
            </ul>

            <h2>5. Cu cine partajăm datele</h2>
            <p>
                Nu vindem niciodată datele tale. Le putem partaja exclusiv cu:
            </p>
            <ul>
                <li>Personalul medical implicat direct în îngrijirea ta.</li>
                <li>Furnizorii de servicii (găzduire, comunicare, contabilitate) care procesează date strict pentru noi, sub obligație de confidențialitate.</li>
                <li>Autoritățile competente, atunci când legea ne obligă.</li>
            </ul>

            <h2>6. Cât timp păstrăm datele</h2>
            <p>
                Datele medicale sunt păstrate conform termenelor impuse de legislația sanitară. Datele de contact și comunicare sunt păstrate pe durata relației contractuale și ulterior pentru perioada cerută de obligațiile legale (de regulă, până la 5 ani).
            </p>

            <h2>7. Drepturile tale</h2>
            <p>Ai dreptul:</p>
            <ul>
                <li>De a accesa datele tale și de a primi o copie a acestora.</li>
                <li>De a solicita rectificarea sau ștergerea datelor incorecte.</li>
                <li>De a restricționa sau te opune prelucrării.</li>
                <li>De a-ți retrage consimțământul în orice moment.</li>
                <li>De a depune o plângere la autoritatea competentă pentru protecția datelor.</li>
            </ul>
            <p>
                Pentru exercitarea oricărui drept, scrie-ne la{' '}
                <a href="mailto:contact@medacasa.md">contact@medacasa.md</a>. Vom răspunde în maximum 30 de zile.
            </p>

            <h2>8. Securitatea datelor</h2>
            <p>
                Aplicăm măsuri tehnice și organizatorice pentru a-ți proteja datele: criptare în tranzit, acces restricționat, instruirea personalului și revizuiri periodice ale procedurilor.
            </p>

            <h2>9. Cookie-uri</h2>
            <p>
                Site-ul folosește cookie-uri esențiale pentru funcționare și, opțional, cookie-uri analitice pentru a înțelege cum este folosit site-ul. Poți gestiona cookie-urile din setările browserului.
            </p>

            <h2>10. Modificări</h2>
            <p>
                Putem actualiza această politică pentru a reflecta schimbări legislative sau operaționale. Versiunea curentă este afișată întotdeauna pe această pagină, alături de data ultimei actualizări.
            </p>

            <h2>11. Contact</h2>
            <p>
                Pentru orice întrebare despre confidențialitate ne poți scrie la{' '}
                <a href="mailto:contact@medacasa.md">contact@medacasa.md</a> sau suna la{' '}
                <a href="tel:+37378392285">078 392 285</a>.
            </p>
        </LegalPage>
    );
}

export default Privacy;
