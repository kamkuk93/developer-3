import React from 'react';
import styles from './about_me_view.module.scss';
import { Link } from 'react-router-dom'




const ModalOne = () => (
    <div className={styles.wrapper}>

        <div className={styles.box_1}>

            <p className={styles.subtitle}>O mnie</p>


            <Link to="/" >

                <div className={styles.close}></div>

            </Link>




        </div>

        <p className={styles.introduction}>Cześć, bardzo mi miło, że tu zajrzałeś.</p>

        <p className={styles.paragraph_1}>
            Zajmuję się projektowaniem i programowaniem stron oraz aplikacji internetowych. Od pięciu lat realizuję swoje pomysły w szeroko rozumianej dziedzinie design-u.
            Przez ten czas udało mi się zaprojektować kilka produktów, które spotkały się z szerokim uznaniem klientów. Od dwóch lat koncentruję się na projektowaniu
            i programowniau produktów internetowych. W swoich projektach łączę dobry design z optymalną technologią.
            
            <br /><br />
            Podczas projektowania stron internetowych kładę duży nacisk na badanie użytkowników. Sprawnie wykorzystuję zagadnienia User Experience Design oraz
            User Interface Design w wykonaniu produktów internetowych. Moim celem jest projektowanie stron internetowych maksymalnie dostosowanych do potrzeb użytkowników.
            Inspirując się najnowszymi trendami graficznymi, projektuję strony internetowe, które charakteryzują się indywidualnością i zapadają w pamięć użytkowniów.
            Programując stronę internetową dobieram technologie, które pozwalają na płynne korzstanie z witryny.

            <br /><br />
            Zapraszam do współpracy.
        </p>


    </div>
)

export default ModalOne;



