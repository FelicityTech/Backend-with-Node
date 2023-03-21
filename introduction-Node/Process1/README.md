# Process in node

you can use the process module to access command line arguments and the environment variables of your app.


1. To access the command line arguments, you can use the process.argv array. It contains an array of strings where the first two elements are the paths to the NodeJS executable and the main module file, and the following elements are the arguments passed to your script. [argv](./argv1.js)
the process.argv array contains the paths to the NodeJS executable and the main module file, followed by any arguments passed to the script.

2. To access the environment variables, you can use the process.env object. It contains a collection of key-value pairs representing the environment variables of your app.