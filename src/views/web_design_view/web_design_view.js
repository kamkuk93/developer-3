import React from 'react';
import styles from './web_design_view.module.scss';
import { Link } from 'react-router-dom'




const ModalOne = () => (
    <div className={styles.wrapper}>

        <div className={styles.box_1}>
            <div className={styles.icon}></div>
            <p className={styles.subtitle}>Projektowanie stron internetowych</p>


            <Link to="/" >

                <div className={styles.close}></div>

            </Link>




        </div>

        <p className={styles.introduction}>W ramach tej usługi oferuję kompletne
        zaprojektowanie strony internetowej.</p>

        <p className={styles.paragraph_1}>
            W dzisiejszym świecie dobrze
            zaprojektowana strona internetowa jest
            niezbędna do efektywnego funkcjonowania
            biznesu oraz pozyskiwania nowych
            klientów. W gąszczu internetowych
            produktów, oryginalny design pozwala na
            zapamiętanie strony internetowej przez
            potencjalnego interesariusza.
        <br /><br />
            Sposób w jaki projektuję strony internetowe
            jest ściśle uzależniony od wielkości projektu.
            Na początku każdego projektu ustalam z
            moim klientem zakres prac spośród niżej
           przedstawionych etapów.</p>

        <div className={styles.steps_wrapper}>

            <div className={styles.box_2}>
                <p className={styles.number}>I.</p>
                <p className={styles.step_1}>Etap przygotowania</p>
                <p className={styles.step_1_p}>ustalenie brief-u</p>
            </div>

            <div className={styles.box_3}>
                <p className={styles.number}>II.</p>
                <p className={styles.step_1}>Etap analizy</p>

                <p className={styles.step_2_p}> <span className={styles.bold}>Badanie technologii</span><br /><br />
            ustalenie kwestii technologicznych</p>

                <div className={styles.break_line}></div>

                <p className={styles.step_2_p}> <span className={styles.bold}>Badanie biznesu</span><br /><br />

            określenie celów wewnętrznych i zewnętrznych produktu
            <br /><br />
            określenie problemów, jakie ma rozwiązywać produkt
            <br /><br />
            określenie podstawowych funkcji produktu
            <br /><br />
            research w Internecie
            </p>

                <div className={styles.break_line}></div>


                <p className={styles.step_2_p}> <span className={styles.bold}>Badanie użytkowników</span><br /><br />

            przeprowadzenie ankiet
            <br /><br />
            przeprowadzenie indywidualnych wywiadów
            <br /><br />
            obserwacja etnograficzna
            <br /><br />
            research w Internecie
            <br /><br />
            analiza dostępnych danych, raportów, statystyk
            </p>

                <div className={styles.break_line}></div>


                <p className={styles.step_2_p}> <span className={styles.bold}>Badanie kontekstu</span><br /><br />


            określenie i analiza konkurencji
            <br /><br />
            określenie i analiza benchmarku
            <br /><br />
            analiza branży
            <br /><br />
            research w Internecie
            <br /><br />
            analiza dostępnych danych, raportów, statystyk
            </p>

            </div>

            <div className={styles.box_4}>

                <p className={styles.number}>III.</p>
                <p className={styles.step_1}>Etap strategii</p>
                <p className={styles.step_1_p}>
                    określenie Bussiness Model Canvas
                <br /><br />
                określenie person (przedstawiciele grup docelowych)
                <br /><br />
                propozycja wartości (określenie unikalnej wartości dla klienta)
                <br /><br />
                scenariusze użytkownika (scenariusz użytkowania strony)
                <br /><br />
                mapa doświadczeń klienta (jak użytkownik się czuje, gdy korzysta ze strony)

                </p>


            </div>


            <div className={styles.box_5}>

                <p className={styles.number}>IV.</p>
                <p className={styles.step_1}>Etap design</p>
                <p className={styles.step_1_p}>
                    research w Internecie
            <br /><br />
            zaprojektowanie architektury informacji (gdzie i co ma się znajdować na stronie)
            <br /><br />
            flow (jak można się poruszać po stronie)
            <br /><br />
            wareframes (szkice strony)
            <br /><br />
            user interface (oprawa graficzna strony)

                </p>


            </div>
        </div>
    </div>
)

export default ModalOne;



