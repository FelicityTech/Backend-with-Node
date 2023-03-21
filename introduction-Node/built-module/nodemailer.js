const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
        user: 'dorcas.okunlola2019@yahoo.com',
        pass: '08128278792'
    }
});


const mailOptions ={
    from: '@yahoo.com',
    to: 'gmail.com',
    subject: 'Test Email',
    text: 'This is a test email from ny NodeJS app!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Email sent: ${info.response}`);
    }
});