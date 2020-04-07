import React from 'react';
import styles from './hotel_view.module.scss';
import { Link } from 'react-router-dom'




const ModalOne = () => (
    <div className={styles.wrapper}>

        <div className={styles.box_1}>

            <p className={styles.subtitle}>Hotel Snowberg</p>
            <Link to="/" >
                <div className={styles.close}></div>
            </Link>
        </div>


        <div className={styles.first_image}></div>

        <p className={styles.introduction}>

            Projekt strony internetowej hotelu Snowberg powstał w celu zwiększenia liczby rezerwacji oraz promocji obiektu wśród turystów.
            
        </p>

        <div className={styles.second_image}></div>

        <p className={styles.paragraph_1}>

            Głównym założeniem projektu było zaprojektowanie strony internetowej, która pozwoli na łatwe oraz intuicyjne dokonywanie rezerwacji.
            Użyteczny formularz uławia użytkownikowi zarezerwowanie noclegu w tym obiekcie.
            Modernistyczny wygląd strony wyróżnia się na tle konkurencji.
            
          </p>








    </div>
)

export default ModalOne;



