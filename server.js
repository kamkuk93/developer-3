const express = require('express'); //needed to launch server
// const cors = require('cors'); //needed to disable sendgrid security
const sgMail = require('@sendgrid/mail'); //sendgrid library to send emails 


const app = express(); //alias from the express function

//sendgrid api key
// sgMail.setApiKey('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');
sgMail.setApiKey('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');

// app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!


// Welcome page of the express server: 

// app.get('/', (req, res) => {
//     res.send("Welcome to the Sendgrid Emailing Server");
// });

app.get('/send-email', (req, res) => {

    // res.json({ msg: 'This is CORS-enabled for all origins!' })

    //Get Variables from query string in the search bar
    const { recipient, sender, topic, text } = req.query;

    //Sendgrid Data Requirements
    const msg = {
        to: recipient,
        from: sender,
        subject: topic,
        text: text,
    }

    //Send Email
    sgMail.send(msg)
        .then((msg) => console.log(text));
});

// to access server run 'nodemon index.js' then click here: http://localhost:3000/
app.listen(4000, () => console.log("Running on Port 4000 hehe")); 