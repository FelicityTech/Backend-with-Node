const bcrypt = require('bcrypt')

const password = 'my-password';
const saltRounds = 10;

bcrypt.hash(password, saltRounds)
.then(hash => {
    console.log(hash); //Prints the hashed password string

    bcrypt.compare(password, hash)
    .then(result => {
        console.log(result); // Prints true
    });
});