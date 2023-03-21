const moment = require('moment');

const date = moment('2023-03-21T10:03:00Z');
console.log(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
console.log(date.add(1, 'day').format('dddd, MMMM Do YYYY, h:mm:ss a'));