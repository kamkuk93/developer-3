import React from 'react';
import styles from './development_view.module.scss';
import { Link } from 'react-router-dom'




const ModalOne = () => (
    <div className={styles.wrapper}>

        <div className={styles.box_1}>
            <div className={styles.icon}></div>
            <p className={styles.subtitle}>Wdrażanie stron internetowych</p>
            <Link to="/" >
                <div className={styles.close}></div>
            </Link>
        </div>

        <p className={styles.introduction}>W ramach tej usługi oferuję
            zaprogramowanie i wdrożenie strony internetowej. </p>

        <p className={styles.paragraph_1}>
            Obecnie branża nowych technologii rozwija
            się w bardzo szybkim tempie i co roku
            można zaobserwować pojawiające się nowe
            sposoby programowania i wdrażania stron
            internetowych.
            <br /><br />
            Oferuję zaprogramowanie i wdrożenie
            strony internetowej w dwóch wariantach.
          </p>

        <div className={styles.steps_wrapper}>

            <div className={styles.box_2}>
                <p className={styles.number}>I.</p>
                <p className={styles.subtitle_1}>Strona od zera</p>
                <p className={styles.subtitle_1_p}>
                    Programując stronę internetową od zera
                    korzystam z takich technologii jak: html, css,
                    JavaScript, React js. Dzięki temu mogę
                    zaprogramować dowolny wygląd strony bez
                    żadnych ograniczeń. W celu funkcjonowania
                    strony buduję również serwer i bazę
                    danych.
                </p>

                <p className={styles.pros}> <span className={styles.bold}>Plusy:</span><br /><br />
                dowolny wygląd strony bez żadnych ograniczeń
                <br /><br />
                indywidualny design pozwala się lepiej wyróżnić
                <br /><br />
                możliwość dodawania kontentu z CMS
                <br /><br />
                możliwość wykonania zaawansowanych animacji
                <br /><br />
                lepszy User Experience
                </p>


                <p className={styles.cons}> <span className={styles.bold}>Minusy:</span><br /><br />
                dłuższy czas realizacji
                <br /><br />
                bardziej skomplikowany proces
                wdrażania
                </p>

            </div>







            <div className={styles.box_3}>
                <p className={styles.number}>II.</p>
                <p className={styles.subtitle_1}>Strona Wordpress</p>
                <p className={styles.subtitle_1_p}>
                    Pracując nad stroną na Wordpress
                    przeważnie korzystam z płatnych i darmowych szablonów.
                    Takie podejście pozwala na
                    szerokie dostosowanie
                    wyglądu strony internetowej. W zależności
                    od preferencji mojego klienta, wykorzystuję
                    również dodatkowe wtyczki i rozszerzenia.
                </p>

                <p className={styles.pros}> <span className={styles.bold}>Plusy:</span><br /><br />
            krótki czas realizacji
            <br /><br />
            dostosowanie wyglądu za pomocą szblonów
            <br /><br />
            duża liczba wtyczek z różnymi funkcjonalnościami
            <br /><br />
            łatwy sposób dodawania kontentu (blog, zdjęcia)
            <br /><br />
            łatwe wdrażanie
                </p>


                <p className={styles.cons}> <span className={styles.bold}>Minusy:</span><br /><br />
                ograniczenia wynikające z szablonów
                <br /><br />
               mniejsza swoboda w projektowaniu designu
                </p>

            </div>
        </div>


    </div>

)

export default ModalOne;



