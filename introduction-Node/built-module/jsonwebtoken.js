const jwt = require('jsonwebtoken');

const payload = { username: 'john.doe' };
const secretKey = 'my-secret-key';

const token = jwt.sign(payload, secretKey);