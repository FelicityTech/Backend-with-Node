const axios = require('axios');
const { response } = require('express');

axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.log(error);
})