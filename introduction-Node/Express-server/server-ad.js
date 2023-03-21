const express = require('express');
const app = express();


// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Route with parameter
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    res.send(`User ID: ${id}`);
});


// Route with multiple parameters
app.get('/users/:id/:name', (req, res) => {
    const {id, name} = req.params;
    res.send(`User ID: ${id}, Name: ${name}`);
});

// Route with middleware function
const myMiddleware = (req, res, next) => {
    console.log('Middleware function called');
    next();
};
app.get('/middleware', myMiddleware, (req, res) => {
    res.send('Middleware route');
});

// Route chaining
app.route('/books')
  .get((req, res) => {
    res.send('Get all books');
  })
  .post((req, res) => {
    res.send('Add new book');
  })
  .put((req, res) => {
    res.send('Update book');
  })
  .delete((req, res) => {
    res.send('Delete book');
  });


  // Error handling middleware
  const errorHandler = (err, req, res, next) => {
    console.err(err);
    re.status(500).send('Something went wrong');
  };
  app.use(errorHandler);


  // Start the server 
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });