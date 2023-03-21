// Route handlers as functions or controllers: You can define route handlers as standalone functions or as controllers, which are classes that handle the logic for a particular route

class UserController {
    getUsers(req, res) {
      res.send('All users');
    }
  
    getUserById(req, res) {
      const id = req.params.id;
      res.send(`User ID: ${id}`);
    }
  }
  
  const userController = new UserController();
  
  app.get('/users', userController.getUsers);
  app.get('/users/:id', userController.getUserById);
  