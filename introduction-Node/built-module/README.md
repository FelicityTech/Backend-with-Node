# Nodejs Built-in module

Require the module using the require function.
Call the functions or use the variables provided by the module.
For third-party modules, install them using the npm command before requiring them.

here are a few more tips for working with NodeJS modules:

1. Use the path module for file paths: The path module provides cross-platform compatibility for file paths. It has functions like join, dirname, and basename that can help you work with file paths in a consistent way. For example, instead of hardcoding file paths with slashes, you can use path.join(__dirname, 'public', 'index.html') to join the directory path with the file path.

2. Use the http module for HTTP requests: The http module provides functions to create HTTP servers and make HTTP requests. For example, you can use the http.createServer function to create an HTTP server that listens on a port, and the http.request function to make an HTTP request to a remote server.

3. Use the crypto module for cryptography: The crypto module provides functions for hashing, encrypting, and decrypting data. For example, you can use the crypto.createHash function to create a hash of a string, or the crypto.createCipheriv function to create a cipher for encrypting data.

4. Use the dotenv module for environment variables: The dotenv module allows you to load environment variables from a .env file in your project directory. This is useful for keeping sensitive information like API keys and database passwords out of your codebase. You can use it by requiring it in your main file and calling dotenv.config().

5. Use the nodemailer module for email: The nodemailer module provides functions for sending email. For example, you can use the nodemailer.createTransport function to create a transport object for sending email, and the transport.sendMail function to send an email.

6. Use the express module for web development: The express module is a popular web framework for NodeJS. It provides a simple and intuitive way to create web applications and APIs. You can use it to create routes, handle HTTP requests and responses, and work with templates. For example, you can create a new express app by running npm install express and then requiring it in your code.
7. Use the body-parser module for parsing request bodies: The body-parser module is a middleware for express that allows you to parse the request body of HTTP requests. You can use it to parse JSON, URL-encoded, and multipart/form-data request bodies. For example, you can install and use it in your express app.

8. Use the jsonwebtoken module for JSON Web Tokens (JWT): The jsonwebtoken module allows you to generate and verify JSON Web Tokens. JWTs are a popular way to authenticate and authorize users in web applications and APIs. For example, you can use it to sign a JWT with a secret key and payload.

9. Use the mongoose module for MongoDB: The mongoose module provides an easy-to-use Object Document Mapper (ODM) for MongoDB. You can use it to define schemas, models, and interact with MongoDB databases.
10. Use the socket.io module for real-time web applications: The socket.io module allows you to create real-time, bidirectional, and event-based communication between the server and the client. You can use it to create chat applications, online games, and other real-time web applications.
11. Use the axios module for making HTTP requests: The axios module is a promise-based HTTP client that allows you to make HTTP requests from NodeJS. You can use it to send GET, POST, PUT, DELETE, and other HTTP requests to a remote server. For example, you can install and use it in your code.
12. Use the dotenv-safe module for secure environment variables: The dotenv-safe module is a variant of the dotenv module that ensures all required environment variables are present, and that they are not undefined or empty. This is useful for ensuring that your application has all the necessary environment variables, and that they are not exposed accidentally.
13. Use the winston module for logging: The winston module is a popular logging library for NodeJS. It allows you to log messages with various levels of severity, and to output logs to various destinations, such as console, file, database, and others.[winston](./winston.js)
14. Use the multer module for handling file uploads: The multer module is a middleware for express that allows you to handle file uploads in HTTP requests. You can use it to handle single or multiple file uploads, and to validate file types, sizes, and other attributes.[multer](./multer.js)
15. Use the bcrypt module for password hashing: The bcrypt module allows you to hash and compare passwords securely in your NodeJS app. Password hashing is important for storing user passwords in a secure and non-reversible way, and for preventing unauthorized access to user accounts.[bcrypt](./bcrypt.js)
16. Use the moment module for date and time manipulation: The moment module allows you to parse, manipulate, and format date and time values in your NodeJS app. It provides a convenient API for working with dates and times, and it supports various time zones and formats.[moment](./moment.js) and [moment 2](./moment1.js).
17. Use the nodemailer module for sending emails: The nodemailer module allows you to send emails from your NodeJS app using various email providers and protocols such as SMTP, IMAP, and others. It provides a flexible and easy-to-use API for composing and sending emails with attachments, templates, and other features [nodeEmailer](./nodemailer.js)

Use the morgan module for logging HTTP requests: The morgan module allows you to log HTTP requests and responses in your NodeJS app for debugging and monitoring purposes. It provides a middleware function that can be easily integrated into your ExpressJS app, and it supports various log formats and options.[morgan](./morgan.js).

Use the async module for asynchronous control flow: The async module allows you to control the flow of asynchronous operations in your NodeJS app. It provides a set of functions that can execute tasks in parallel, in series, or with other advanced patterns such as waterfall, each, map, reduce, and others. It also supports error handling, timeouts, and other options [async](./async1.js)