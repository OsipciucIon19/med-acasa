import LegalPage from '../components/LegalPage';

function Terms() {
    return (
        <LegalPage
            eyebrow="Termeni și condiții"
            title="Termeni și condiții de utilizare"
            updatedAt="3 mai 2026"
            intro="Acești termeni reglementează utilizarea serviciilor MedAcasă și a site-ului nostru. Te rugăm să îi citești cu atenție."
        >
            <h2>1. Despre MedAcasă</h2>
            <p>
                <strong>MedAcasă</strong> oferă servicii de asistență medicală la domiciliu (perfuzii, injecții, pansamente, îngrijire post-operatorie, monitorizare etc.) în Chișinău și suburbii, conform prescripției medicale.
            </p>

            <h2>2. Cine poate utiliza serviciile</h2>
            <p>
                Serviciile sunt destinate persoanelor care dețin o prescripție medicală valabilă și care se află într-o zonă în care MedAcasă operează. Pentru pacienții minori sau aflați sub tutelă, programarea trebuie efectuată de către un reprezentant legal.
            </p>

            <h2>3. Programare și confirmare</h2>
            <ul>
                <li>Programarea se face prin telefon, WhatsApp, e-mail sau formularul de contact.</li>
                <li>Confirmarea vizitei depinde de disponibilitatea echipei și de validarea prescripției.</li>
                <li>Pentru programările urgente vom face tot posibilul să răspundem în cel mai scurt timp, dar nu garantăm un interval fix.</li>
            </ul>

            <h2>4. Anulare și reprogramare</h2>
            <p>
                Anularea sau reprogramarea unei vizite se poate face gratuit cu cel puțin 2 ore înainte de ora programată. Pentru anulările tardive sau pentru cazurile în care echipa ajunge la adresa indicată și pacientul lipsește, ne rezervăm dreptul de a percepe un cost de deplasare.
            </p>

            <h2>5. Prețuri și plată</h2>
            <ul>
                <li>Prețurile sunt comunicate înainte de programare și pot varia în funcție de tipul intervenției și zona geografică.</li>
                <li>Plata se efectuează în numerar sau prin transfer bancar, conform opțiunii disponibile la programare.</li>
                <li>La cerere, eliberăm bon fiscal sau factură.</li>
            </ul>

            <h2>6. Obligațiile pacientului</h2>
            <ul>
                <li>Să furnizeze date corecte și complete despre starea de sănătate, prescripția medicală și alergii.</li>
                <li>Să asigure condiții minime de igienă și acces în locația în care se va efectua intervenția.</li>
                <li>Să respecte indicațiile personalului medical pe durata vizitei.</li>
            </ul>

            <h2>7. Obligațiile MedAcasă</h2>
            <ul>
                <li>Să trimită personal medical calificat și echipat corespunzător.</li>
                <li>Să respecte prescripția medicală și protocoalele sanitare.</li>
                <li>Să trateze pacientul cu respect, demnitate și confidențialitate.</li>
            </ul>

            <h2>8. Limitarea răspunderii</h2>
            <p>
                MedAcasă nu se substituie medicului care a emis prescripția și nu poate fi tras la răspundere pentru efecte adverse care decurg din tratamentul prescris, atunci când acesta a fost administrat conform indicațiilor medicului. În cazul oricărei reacții neașteptate, pacientul trebuie să contacteze imediat serviciul de urgență (112).
            </p>

            <h2>9. Proprietate intelectuală</h2>
            <p>
                Întregul conținut al site-ului (texte, imagini, logo, design) aparține MedAcasă sau partenerilor noștri și este protejat de legislația privind drepturile de autor. Reproducerea fără acord scris este interzisă.
            </p>

            <h2>10. Modificări</h2>
            <p>
                Ne rezervăm dreptul de a actualiza acești termeni. Versiunea curentă este afișată întotdeauna pe această pagină, alături de data ultimei actualizări. Continuarea utilizării serviciilor după publicarea modificărilor reprezintă acceptarea acestora.
            </p>

            <h2>11. Legea aplicabilă</h2>
            <p>
                Acești termeni sunt guvernați de legislația Republicii Moldova. Eventualele litigii se soluționează amiabil sau, în lipsa acordului, de instanțele competente de la sediul MedAcasă.
            </p>

            <h2>12. Contact</h2>
            <p>
                Pentru întrebări legate de acești termeni, scrie-ne la{' '}
                <a href="mailto:contact@med-acasa.md">contact@med-acasa.md</a> sau sună la{' '}
                <a href="tel:+37378392285">078 392 285</a>.
            </p>
        </LegalPage>
    );
}

export default Terms;
