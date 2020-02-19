import React, { Component } from 'react';
import styles from './contact_section.module.scss';



class ContactSection extends Component {

    state = {
        email: {
            recipient: 'kamkuk93@gmail.com',
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

        const spacer = {
            margin: 10
        }
        const textArea = {
            borderRadius: 4
        }

        return (
            <div className={styles.wrapper}>
                <p className={styles.title}>Contact</p>

                <div className="App">
                    <div style={{ marginTop: 10 }} >
                        <h2> Send Email </h2>
                        <label> Recipient </label>
                        <br />
                        {/* <input value={email.recipient}
                            onChange={e => this.setState({ email: { ...email, recipient: e.target.value } })} />
                        <div style={spacer} /> */}
                        <label> Sender </label>
                        <br />
                        <input value={email.sender}
                            onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} />
                        <div style={spacer} />
                        <label> Subject </label>
                        <br />
                        <input value={email.subject}
                            onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                        <div style={spacer} />
                        <label> Message </label>
                        <br />
                        <textarea rows={3} value={email.text} style={textArea}
                            onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
                        <div style={spacer} />
                        <button onClick={this.sendEmail}> Send Email </button>
                    </div>
                </div>


            </div>
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