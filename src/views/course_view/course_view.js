import React from 'react';
import styles from './course_view.module.scss';
import { Link } from 'react-router-dom'




const ModalOne = () => (
    <div className={styles.wrapper}>

        <div className={styles.box_1}>

            <p className={styles.subtitle}>Serwis z kursami IT</p>
            <Link to="/" >
                <div className={styles.close}></div>
            </Link>
        </div>


        <div className={styles.first_image}></div>

        <p className={styles.introduction}>

            Projekt aplikacji internetowej IT squad, która zawiera kursy dotyczące branży IT ma na celu rozpowszechnianie i umożliwianie nauki programowania.
            
        </p>

        <div className={styles.second_image}></div>

        <p className={styles.paragraph_1}>

            Głównym założeniem projektu było zaprojektowanie strony internetowej, która umożliwi naukę programowania za pomoca Internetu.
            Strona internetowa zawiera kursy i ścieżki kształcenia ułatwiające nabycie nowej wiedzy z dziedziny IT.
            Użytkownik ogląda materiały wideo a następnie powtarza wytłumaczone zadania.
           
          </p>








    </div>
)

export default ModalOne;



