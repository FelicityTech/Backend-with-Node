// Route groups: You can group related routes together using the app.route() method.
const userRoutes = express.Router();

userRoutes.use((req, res, next) => {
  console.log('User route middleware function called');
  next();
});

userRoutes.get('/', (req, res) => {
  res.send('All users');
});

userRoutes.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`User ID: ${id}`);
});

app.use('/users', userRoutes);
