import React from 'react';
import styles from './shop_view.module.scss';
import { Link } from 'react-router-dom'




const ModalOne = () => (
    <div className={styles.wrapper}>

        <div className={styles.box_1}>
            <div className={styles.icon}></div>
            <p className={styles.subtitle}>Budowanie sklepów internetowych</p>
            <Link to="/" >
                <div className={styles.close}></div>
            </Link>
        </div>

        <p className={styles.introduction}>W ramach tej usługi oferuję wykonanie
        kompletnego sklepu internetowego.

        </p>

        <p className={styles.paragraph_1}>
            W dzisiejszych czasach robienie zakupów
            przez Internet stało się naturalną i
            codzienną czynnością. Oferuję zbudowanie
            sklepu on-line wraz ze wszystkimi
            funkcjonalnościami. Do budowania
            stron sklepów internetowych wykorzystuję
            najnowsze oprograowanie e-commerce.
          </p>

        <div className={styles.steps_wrapper}>

            <div className={styles.box_2}>
                {/* <p className={styles.number}>I.</p> */}
                <p className={styles.subtitle_1}>Oferuję wykonanie:</p>
                <p className={styles.subtitle_1_p}>
                    sklep internetowy
                    <br /><br />
                    projektowanie User Experience
                    <br /><br />
                    projektowanie szaty graficznej
                    <br /><br />
                    podstrony produktów
                    <br /><br />
                    analiza grupy docelowej
                    <br /><br />
                    elementy marketingowe
                </p>



            </div>







        </div>


    </div>

)

export default ModalOne;



