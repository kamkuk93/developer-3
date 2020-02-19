import React from 'react';
import styles from './seventh_section.module.scss';
import { Link } from 'react-router-dom'


const MainBackground = () => (
    <div className={styles.wrapper}>
        <p className={styles.title}>Blog</p>

        <Link to="/blog"> Przejdź do bloga</Link>
    </div>
)

export default MainBackground;