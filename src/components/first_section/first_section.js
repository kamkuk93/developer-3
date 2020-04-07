import React from 'react';
import styles from './first_section.module.scss';
import { Link } from 'react-router-dom'

import logoImage from './../../assets/img/logo.png'

import MenuIcon from '../menu_icon/menu_icon'
import FirstSlider from '../first_slider/first_slider'
import MenuHamburger from '../menu/menu'
import MenuStyled from '../menu_styled/menu_styled'


const MainBackground = () => (
    <div className={styles.wrapper}>


        {/* <img src={logoImage} className={styles.logo} alt="Logo" /> */}

        <div className={styles.logo}></div>

        {/* <MenuIcon /> */}
        {/* <MenuHamburger /> */}
        <MenuStyled />

        <p className={styles.title}>Projektant <span className={styles.plus}> + </span> Programista</p>

        <FirstSlider />

        <Link to="/aboutme" className={styles.about_me}> O mnie</Link>

        {/* <Link to="">
            <button className={styles.about_me}>O mnie</button>
        </Link> */}

    </div>
)

export default MainBackground;