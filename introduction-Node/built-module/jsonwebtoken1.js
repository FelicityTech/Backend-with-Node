const jwt = require('jsonwebtoken')


const payload = { userId: 124 };
const secretKey = 'my-secret-key';
const options = { expiresIn: '1h' };

const token = jwt.sign(payload, secretKey, options);
console.log(token); // print the JWT string

const decoded = jwt.verify(token, secretKey);
console.log(decoded); // Prints the decoded payload object
