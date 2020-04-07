import React from 'react';
import styles from './graphic_design_view.module.scss';
import { Link } from 'react-router-dom'




const ModalOne = () => (
    <div className={styles.wrapper}>

        <div className={styles.box_1}>
            <div className={styles.icon}></div>
            <p className={styles.subtitle}>Projektowanie graficzne</p>
            <Link to="/" >
                <div className={styles.close}></div>
            </Link>
        </div>

        <p className={styles.introduction}>W ramach tej usługi oferuję wykonanie
        różnego rodzaju zadań związanych z szeroko rozumianym projektowaniem graficznym.
        </p>

        <p className={styles.paragraph_1}>
            Obecnie żyjemy w świecie obrazów, ikon,
            grafik i ilustracji. Identyfikacja wizualna
            jest bardzo ważnym elementem każdej
            firmy. Dzięki niej klienci są w stanie
            odróżnić naszą działalność od konkurencji
            i zidentyfikować ją na rynku. Dobrze
            zaprojektowana identyfikacja wizualna
            nie jest zbiorem przypadkowych symboli,
            ale dobrze przemyślanym sposobem
            przedstawienia wizerunku i wartości
            naszej firmy dla klientów.
          </p>

        <div className={styles.steps_wrapper}>

            <div className={styles.box_2}>
                {/* <p className={styles.number}>I.</p> */}
                <p className={styles.subtitle_1}>Oferuję wykonanie:</p>
                <p className={styles.subtitle_1_p}>
                    identyfikacji wizualnej
                    <br /><br />
                    logo
                    <br /><br />
                    wizytówki
                    <br /><br />
                    papier firmowy
                    <br /><br />
                    grafiki związane z reklamą
                    w Internecie
                    <br /><br />
                    zestawy ikon na stronę internetową
                    <br /><br />
                    plakaty
                    <br /><br />
                    ulotki
                    <br /><br />
                    broszury
                    <br /><br />
                    grafiki na przedmioty marketingowe
                </p>



            </div>







        </div>


    </div>

)

export default ModalOne;



