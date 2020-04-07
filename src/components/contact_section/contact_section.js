import React, { Component } from 'react';
import styles from './contact_section.module.scss';
import { Link } from 'react-router-dom'


class ContactSection extends Component {

    state = {
        email: {
            // recipient: 'kamkuk93@gmail.com',
            recipient: 'experiencedeveloper1@gmail.com',
            sender: '',
            subject: '',
            text: ''
        }
    }

    sendEmail = _ => {
        const { email } = this.state;
        fetch(`/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
            // fetch(`http://172.17.0.2:4000/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
            .catch(err => console.error(err))
    }

    render() {
        const { email } = this.state;



        return (
            <div className={styles.wrapper} id={'kontakt'}>
                <p className={styles.title}>Kontakt</p>

                <div className={styles.content}>
                    {/* <div style={{ marginTop: 10 }} > */}

                    {/* <label> Recipient </label>
                        <br /> */}
                    {/* <input value={email.recipient}
                            onChange={e => this.setState({ email: { ...email, recipient: e.target.value } })} />
                        <div style={spacer} /> */}

                    <form>
                        <label className={styles.subtitle}> Twój e-mail </label>
                        <br />
                        <input className={styles.input_email} value={email.sender} onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} />
                        {/* <div style={spacer} /> */}


                        <label className={styles.subtitle}> Temat wiadomości </label>
                        <br />
                        <input className={styles.input_message} value={email.subject} onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                        {/* <div style={spacer} /> */}


                        <label className={styles.subtitle}> W czym mogę Ci pomóc? </label>
                        <br />
                        <textarea className={styles.input_text} rows={3} value={email.text} onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
                        {/* <div style={spacer} /> */}


                        {/* <input type="button" className={styles.button} onClick={this.sendEmail} /> Send Email */}


                        {/* <button type="submit" className={styles.button} onClick={this.sendEmail}> Wyślij </button> */}


                        <button type="button" className={styles.button} onClick={this.sendEmail}> Wyślij </button>



                        {/* <button type="submit" onSubmit="window.location.reload();" className={styles.button} onClick={this.sendEmail}> Send Email </button> */}

                    </form>

                    {/* <button type="button" className={styles.button} onClick={this.sendEmail}> Send Email </button> */}
                    {/* </div> */}
                </div>

                <div className={styles.social_media_box}>

                    <a className={styles.link} target="_blank" href="https://www.facebook.com/Experience-Developer-101000278242439/">
                        <p className={styles.social_media_facebook}>Facebook</p>
                    </a>

                    <a className={styles.link} target="_blank" href="https://www.instagram.com/experiencedeveloper/" >
                        <p className={styles.social_media_instagram}>Instagram</p>
                    </a>
                </div>


            </div >
        )
    }
}

export default ContactSection




// const MainBackground = () => (
//     <div className={styles.wrapper}>
//         <p className={styles.title}>Contact</p>

//     </div>
// )

// export default MainBackground;