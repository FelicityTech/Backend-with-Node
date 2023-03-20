// this print process argv (it  absolute pathname of executable that start the,file path, and subsequent argument)
// 
process.argv.forEach(function(val, index, array){
    console.log(index + ': ' + val)
});