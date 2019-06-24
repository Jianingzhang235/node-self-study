const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./middleware/logger');
const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');//optional

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses', courses);
app.use('/', home);

//Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
// console.log('Mail Password: ' + config.get('mail.password'));//command line should be: password=1234 NODE_ENV=production nodemon index.js

if(app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan enabled...');
};

app.use(logger);
 //port IN TERMINAL :export PORT=5000//NO SPACE;
 const port = process.env.PORT || 3000;
 app.listen(port, () => console.log(`Listening on port ${port}`));