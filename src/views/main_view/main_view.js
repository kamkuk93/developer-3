import React from 'react';
import styles from './main_view.module.scss';

import MainBackground from '../../components/main_background/main_background'

import FirstSection from '../../components/first_section/first_section'
import SecondSection from '../../components/second_section/second_section'
import ThirdSection from '../../components/third_section/third_section'
import FourthSection from '../../components/fourth_section/fourth_section'
import FifhSection from '../../components/fifth_section/fifth_section'
import FifhSectionUnder from '../../components/fifth_section/fifth_section_under'
import SeventhSection from '../../components/seventh_section/seventh_section'
import ContactSection from '../../components/contact_section/contact_section'

import MessengerCustomerChat from 'react-messenger-customer-chat';

// import Messenger from '../../components/messenger/messenger'


const mainView = () => (
    <div>




        <div className={styles.wrapper}>


            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifhSection />
            <FifhSectionUnder />

            <ContactSection />
            <SeventhSection />
            {/* <Messenger /> */}

            <MessengerCustomerChat
                pageId="<101000278242439>"
                appId="<1105809939751290>"
            />

        </div>

        <MainBackground />
    </div>
)

export default mainView;