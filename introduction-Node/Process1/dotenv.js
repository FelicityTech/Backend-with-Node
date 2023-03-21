const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PORT);
console.log(process.env.DB_PASS);
