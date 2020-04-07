import React from 'react';
import styles from './conference_view.module.scss';
import { Link } from 'react-router-dom'




const ModalOne = () => (
    <div className={styles.wrapper}>

        <div className={styles.box_1}>

            <p className={styles.subtitle}>Konferencja MediaCube</p>
            <Link to="/" >
                <div className={styles.close}></div>
            </Link>
        </div>


        <div className={styles.first_image}></div>

        <p className={styles.introduction}>

            Projekt strony internetowej konferencji MediaCube ma na celu sprzedaż biletów na wydarzenie o temetyce marketingowej.
            
        </p>

        <div className={styles.second_image}></div>

        <p className={styles.paragraph_1}>

            Głównym założeniem projektu było zaprojektowanie strony internetowej, która dostarczy informacji na temat konferencji marketingowej.
            Strona umożliwia zapoznanie się ze szczegółami wydarzenia oraz przedstwaia głównych prelegentów. Dzięki stronie MediaCube, użytkownik ma możliwość kupienia biletu na tą konferencje.
            
          </p>








    </div>
)

export default ModalOne;



