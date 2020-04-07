import React from 'react';
import styles from './seventh_section.module.scss';
import { Link } from 'react-router-dom'


const MainBackground = () => (
    <div className={styles.wrapper}>
        <div className={styles.line}></div>


        <div className={styles.social_media_box}>
            <p className={styles.social_media}>SOCIAL MEDIA</p>
            <a className={styles.link} target="_blank" href="https://www.facebook.com/Experience-Developer-101000278242439/">
                <div className={styles.social_media_facebook}></div>
            </a>

            <a className={styles.link} target="_blank" href="https://www.instagram.com/experiencedeveloper/" >
                <div className={styles.social_media_instagram}></div>
            </a>
        </div>

        <div className={styles.email_box}>
            <p className={styles.email_title}> E-MAIL</p>
            <p className={styles.email_text}> experience-developer1@gmail.com</p>
        </div>

        <div className={styles.blog_box}>
            <Link to="/blog" >
                <p className={styles.blog_title}> BLOG</p>
                <p className={styles.blog_text}> Zobacz wpisy</p>
            </Link>
        </div>

        <div className={styles.logo_box}>

            <div className={styles.logo_image}></div>
            <p className={styles.logo_text}> © All rights are reserved | 2020</p>

        </div>






    </div>
)

export default MainBackground;