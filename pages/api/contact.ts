const generateHTMLBody = (message) => `<div>${message}</div>`;

export default async function (req, res) {
  const { sender, senderEmail, receiver, receiverEmail, subject, message } = req.body;
  require('dotenv').config();
  const receiverEmailAddress = receiverEmail || process.env.SMTP_TO_EMAIL;

  const nodemailer = require('nodemailer');
  let description = 'Email has not been sent';

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.SMTP_TO_EMAIL,
      pass: process.env.SMTP_TO_PASSWORD
    },
    secure: true
  });

  const mailData = {
    from: `${sender} <${senderEmail}>`, // sender address
    to: `${receiver} <${receiverEmailAddress}>`, // receiver address
    subject: subject, // Subject line
    text: message, // plain text body
    html: generateHTMLBody(message) // html body
  };

  const response = await transporter.sendMail(mailData);

  if (response) {
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    const { messageId } = response;
    description = 'Email has been sent.';
    res.status(200).json({ messageId, description });
  } else {
    res.status(500).json({ description });
  }
}
