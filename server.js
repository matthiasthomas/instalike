// requires
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const router = express.Router();
const helmet = require('helmet');
const DB = require('./server/config/db.conf');
require('dotenv-extended').load();

const app = express();

//Connect to DB
DB.init();

// parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Security
app.use(helmet());

// static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

const routes = require('./server/index.routes');
app.use('/api', routes.router);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));