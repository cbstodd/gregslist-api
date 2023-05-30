require('dotenv').config();
const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3001;
const url = process.env.LOCAL_URL || 'localhost';

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Your Express server is running on http://${url}:${port}`);
});
