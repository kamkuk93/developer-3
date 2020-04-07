import React from 'react';
import styles from './restaurant_view.module.scss';
import { Link } from 'react-router-dom'




const ModalOne = () => (
    <div className={styles.wrapper}>

        <div className={styles.box_1}>

            <p className={styles.subtitle}>Restauracja Italia</p>
            <Link to="/" >
                <div className={styles.close}></div>
            </Link>
        </div>


        <div className={styles.first_image}></div>

        <p className={styles.introduction}>

            Projekt strony internetowej restauracji Italia ma na celu zwiększenie liczby klientów oraz wyróżnienie firmy na tle konkurencji.
            
        </p>

        <div className={styles.second_image}></div>

        <p className={styles.paragraph_1}>

            Głównym założeniem projektu było zaprojektowanie strony internetowej, która zachęca klientów do skorzystania z usług firmy.
            Strona inernetowa zawiera duże zdjęcia, których zadaniem jest zobrazowanie wysokiej jakości dań serwowanych przez restaurację.
            Ręczny font i logo nawiązują do włoskiego charakteru przedsięwzięcia.
            Funkcja "Take tabe" umożliwa szybkie i proste zarezerwowanie stolika w tej restauracji.
          </p>








    </div>
)

export default ModalOne;



