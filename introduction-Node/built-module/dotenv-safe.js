const dotenvSafe = require('dotenv-safe');
dotenvSafe.config()


console.log(process.env.DB_PASSWORD);
// Prints the value of DB_PASSWORD from the .env file