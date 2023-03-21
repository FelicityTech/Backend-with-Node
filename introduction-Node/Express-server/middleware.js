const myRouteMiddleware = (req, res, next) => {
    console.log('Route-specific middleware function called');
    next();

};

app.get('/my-route', myRouteMiddleware, (req, res) => {
    res.send('My Route');
});