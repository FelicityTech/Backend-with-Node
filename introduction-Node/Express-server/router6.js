// Route caching: You can use caching to improve the performance of your routes. This can be especially useful for routes that are computationally expensive or require a lot of database queries. 

const cache = require('memory-cache');

app.get('/users', (req, res) => {
  const cachedData = cache.get('users');

  if (cachedData) {
    console.log('Serving cached data');
    res.send(cachedData);
  } else {
    console.log('Fetching new data');
    const data = // some expensive operation to fetch data
    cache.put('users', data, 10000); // cache for 10 seconds
    res.send(data);
  }
});
