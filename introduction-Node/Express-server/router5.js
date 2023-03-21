// Route nesting: You can nest routes within each other using the app.use() method. This allows you to group related routes together and define middleware that applies to all of the nested routes. 
const userRoutes = express.Router();
const postRoutes = express.Router();

userRoutes.use((req, res, next) => {
  console.log('User route middleware function called');
  next();
});

postRoutes.use((req, res, next) => {
  console.log('Post route middleware function called');
  next();
});

postRoutes.get('/', (req, res) => {
  res.send('All posts');
});

postRoutes.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Post ID: ${id}`);
});

userRoutes.use('/:userId/posts', postRoutes);

app.use('/users', userRoutes);
