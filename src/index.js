const http = require('http');
const winston = require('winston');
const express = require('express');
const config = require('config');
const IssuesAPI = require('./issues/Issues.API');
const IssuesService = require('./issues/Issues.Service');
const IssuesController = require('./issues/Issues.Controller');

const logger = new (winston.Logger)({
  level: config.get('logs.level'),
  transports: [
    new (winston.transports.Console)({
      timestamp() {
        return (new Date()).toISOString();
      },
      formatter(options) {
        return `${options.timestamp()} ${
          winston.config.colorize(options.level, options.level.toUpperCase())} ${
          options.message ? options.message : ''
        }${options.meta && Object.keys(options.meta).length ? `\n\t${JSON.stringify(options.meta)}` : ''}`;
      },
    }),
  ],
});

let server;

class Main {
  constructor() {
    this.initLogger();
    this.app = express();
    this.issuesAPI = new IssuesAPI(this);
    this.issuesService = new IssuesService(this);
    this.issuesController = new IssuesController(this);
    this.app.set('port', config.get('servicePort'));


    const router = express.Router();
    // TODO: Add Loging for each route

    router.use((req, res, next) => {
      res.setHeader('Content-Type', 'application/json');
      logger.info(`${req.method} ${req.url}`);
      next();
    });

    router.get('/issues/:username', (req, res, next) => this.issuesController.getIssues(req, res, next));
    this.app.use('/', router);

    // Handle all other routes
    this.app.use(this.errorMiddleware.bind(this));

    server = http.createServer(this.app);
    this.port = config.get('servicePort');
    server.listen(this.port);
    server.on('error', this.onError);
    server.on('listening', this.onListening);
  }

  initLogger() {
    this.logger = logger;
  }

  errorMiddleware(err, req, res, next) { // eslint-disable-line
    res.statusCode = 404;
    return res.json({ code: 404, message: 'Invalid route' });
  }

  onError(error) {
    if (error.syscall !== 'listen') { throw error; }
    const bind = (typeof port === 'string') ? `Pipe ${this.port}` : `Port ${this.port}`;

    switch (error.code) {
      case 'EACCES':
        this.logger.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        this.logger.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  onListening() { // eslint-disable-line
    const addr = server.address();
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;

    logger.info(`Listening on ${bind}`);
  }
}


const main = new Main(); // eslint-disable-line no-unused-vars
