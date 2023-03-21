transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(info.response); // Prints the email response
  }
});
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'adegokeeniola2016@yahoo.com',
    pass: 'mypassword'
  }
});

const mailOptions = {
  from: 'adegokeeniola2016@yahoo.com',
  to: 'souceking@gmail.com',
  subject: 'Test Email',
  text: 'Hello World!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(info.response); // Prints the email response
  }
});
