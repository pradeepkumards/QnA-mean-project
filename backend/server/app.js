const express = require('express');
const morgan = require('morgan');
const logger = require('./logger');

const swaggerUI = require('swagger-ui-express');

const YAML = require('yamljs');
// const swaggerDocument = YAML.load('./api/swagger/swagger.yaml');

const app = express();

morgan.token('time', (req, res) => new Date().toISOString());
app.use(
  morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms')
);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const dbConn = require('./dbConnection')();
console.log("Db dbConnection")
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,X-Auth-Token, Content-Type, Accept, Authorization");
  next();
});

app.use('/api/v1', require('./api/v1'));

app.use((err, req, res, next) => {
  if(err) { logger.error(err); next(); }
  res.status(404).send('Not Found');
});

let swaggerOptions = { explorer: false };
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument, swaggerOptions));

module.exports = app;