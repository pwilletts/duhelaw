const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: functions.config().email.email,
      pass: functions.config().email.password,
    },
  });

exports.sendWelcomeEmail = functions.https.onRequest((req, res) => {
    const email = 'duhelaw@gmail.com'; // The email of the user.
    const displayName = 'Jordan'; // The display name of the user.

  const mailOptions = {
    from: `Patrick <patrick.willetts@gmail.com>`,
    to: email,
  };

  // The user subscribed to the newsletter.
  mailOptions.subject = `Hello from Duhe Law`;
  mailOptions.text = `Hey ${displayName || ''}! Welcome to Duhe Law. I hope you will enjoy our service.`;

    mailTransport.sendMail(mailOptions);
  console.log('New welcome email sent to:', email);
  return true
});