// Route parameters with optional segments

app.get('/users/:id?', (req, res) => {
    const id = req.params.id || 'all';
    res.send(`User ID: ${id}`);
  });
  