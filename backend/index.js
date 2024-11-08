const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'soukainaouchenuai@gmail.com',
        pass: 'ktteypikemdcbkqq',
    },
  });

  const mailOptions = {
    from: email,
    to: 'soukainaouchenuai@gmail.com',
    subject: `Contact Form Submission from ${firstName} ${lastName}`,
    text: `Name: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});