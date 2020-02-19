import React from 'react';
import styles from './messenger.module.scss';

import MessengerCustomerChat from 'react-messenger-customer-chat';







class Messenger extends React.Component {




    render() {


        return (

            <div>
                <div className={styles.wrapper}>
                    <div className={styles.logo}></div>
                </div>




                {/* kod do Messengera */}
                <div>
                    <MessengerCustomerChat
                        pageId="<740035376104850>"
                        appId="<1105809939751290>"
                    />

                </div>

            </div>
        );
    }


}

export default Messenger;