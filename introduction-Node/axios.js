const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response => console.log(response.data))
.catch(error => console.error(error));

// This program uses the axios module to 
// make a GET request to the JSONPlaceholder 
// API and logs the response data to the console. 
// To run this program