const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'seadegoke@student.oauife.edu.ng',
        pass: 'mypaswword'
    }
});


const mailOptions ={
    from: 'seadegoke@student.oauife.edu.ng',
    to: 'souceking@gmail.com',
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