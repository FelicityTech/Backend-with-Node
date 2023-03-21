# Process in node

you can use the process module to access command line arguments and the environment variables of your app.


1. To access the command line arguments, you can use the process.argv array. It contains an array of strings where the first two elements are the paths to the NodeJS executable and the main module file, and the following elements are the arguments passed to your script. [argv](./argv1.js)
the process.argv array contains the paths to the NodeJS executable and the main module file, followed by any arguments passed to the script.

2. To access the environment variables, you can use the process.env object. It contains a collection of key-value pairs representing the environment variables of your app.[node-environment](./envV.js).the process.env.NODE_ENV variable contains the value of the NODE_ENV environment variable.

3. You can also set environment variables using the process.env object. [dotenv](./dotenv.js)

4. yargs is a module that helps you parse command line arguments in a structured way. It allows you to define options, flags, and positional arguments, and provides helpful features such as validation and help messages. 

5. the child_process module, which allows you to spawn child processes and communicate with them. You can use the child_process.spawn() method to spawn a child process, and the child_process.exec() method to execute a command in a shell. For example, to spawn a child process and listen for its output.

6. Working with streams:

Node.js provides the process.stdin, process.stdout, and process.stderr streams, which allow you to read input from the command line and write output and error messages. For example, to read input from the command line and write it back to the console