const nodemailer = require('nodemailer');

exports.transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.USER,
    pass: process.env.SMTPRELAY,
  },
});
