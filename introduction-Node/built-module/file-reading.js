const fs = require('fs')

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
})

//   we use the require function to load the fs module,
// which provides file system-related functionality. 
// We then use the readFile function to read the contents
//  of the "example.txt" file. The first argument to readFile 
// is the name of the file, and the second argument is the encoding 
// (in this case, 'utf8'). The third argument is a callback function 
// that is called when the file has been read. The callback function 
// takes two arguments: an error object (if there was an error) and the 
// file contents
