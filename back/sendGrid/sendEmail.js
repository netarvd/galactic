require('dotenv').config() 
const sgMail = require('@sendgrid/mail')

const sendMessage = async (message) => { 

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'amitay1599@gmail.com', 
        from: 'amitay1599@gmail.com', 
        subject: `Message from space weather user`,
        text: 'hello', message,
        html: `${message}`,
      }

await sgMail
  .send(msg)
  .then((response) => {
    console.log(response[0].statusCode)
    console.log(response[0].headers)
    })
    .catch((error) => {
    console.error(error)
    }) 
}

module.exports = sendMessage;