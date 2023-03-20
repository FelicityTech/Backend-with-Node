// Returns an object describing the 
// memory usage of the Node process 
// measured in bytes.

var util = require('util');
console.log(util.inspect(process.memoryUsage()));