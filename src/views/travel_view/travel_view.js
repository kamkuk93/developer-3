import React from 'react';
import styles from './travel_view.module.scss';
import { Link } from 'react-router-dom'




const ModalOne = () => (
    <div className={styles.wrapper}>

        <div className={styles.box_1}>

            <p className={styles.subtitle}>Biuro podróży Holiday</p>
            <Link to="/" >
                <div className={styles.close}></div>
            </Link>
        </div>


        <div className={styles.first_image}></div>

        <p className={styles.introduction}>

            Projekt strony internetowej biura podróży Holiday ma na celu zaprezetowanie sprzedawanych wycieczek w prosty i czytelny sposób.
            
        </p>

        <div className={styles.second_image}></div>

        <p className={styles.paragraph_1}>

            Głównym założeniem projektu było zaprojektowanie strony internetowej, która będzie przedstawiać informacje o wycieczkach w schludny i przejrzysty sposób.
            Typografia na stronie obrazuje najsczęściej wybierane miejsca docelowe podróży oraz ich rozmieszczenie na mapie.
          </p>








    </div>
)

export default ModalOne;



