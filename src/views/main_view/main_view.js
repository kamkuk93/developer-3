import React from 'react';
import styles from './main_view.module.scss';

import MainBackground from '../../components/main_background/main_background'

import FirstSection from '../../components/first-section/first_section'
import SeventhSection from '../../components/seventh_section/seventh_section'
import ContactSection from '../../components/contact_section/contact_section'

// import Messenger from '../../components/messenger/messenger'


const mainView = () => (
    <div>




        <div className={styles.wrapper}>


            <FirstSection />
            <SeventhSection />
            <ContactSection />
            {/* <Messenger /> */}

        </div>

        <MainBackground />
    </div>
)

export default mainView;