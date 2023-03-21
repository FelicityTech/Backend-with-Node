const config = require('config');

const port = config.get('port');
const dbHost = config.get('db.host');
const dbPort = config.get('db.port');
const dbUser = config.get('db.user');
const dbPass = config.get('db.password');