import React from 'react';
import styles from './manufacture_view.module.scss';
import { Link } from 'react-router-dom'




const ModalOne = () => (
    <div className={styles.wrapper}>

        <div className={styles.box_1}>

            <p className={styles.subtitle}>Manufktura Oaak</p>
            <Link to="/" >
                <div className={styles.close}></div>
            </Link>
        </div>


        <div className={styles.first_image}></div>

        <p className={styles.introduction}>

            Projekt strony internetowej firmy produkcyjnej Oaak ma na celu wspomaganie sprzedaży ręcznie wykonywanych stołów z litego drewna. 
            
        </p>

        <div className={styles.second_image}></div>

        <p className={styles.paragraph_1}>

            Głównym założeniem projektu było zaprojektowanie strony internetowej, która podkreśli rzemieślniczy charakter stołów oraz zachęci potencjalnych klientów do dokonania zakupu.
            Szata graficzna strony internetowej nawiązuje do tradycyjnego stolarstwa oraz do ręcznie wykonywanych przedmiotów.
          </p>








    </div>
)

export default ModalOne;



