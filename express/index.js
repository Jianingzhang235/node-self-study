const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const express = require('express');
const logger = require('./logger');
const authe= require('./authentica');
// var path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(logger);
app.use(authe);
app.use(helmet());
app.use(morgan('tiny'));

  
const courses = [
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'}

];


 app.get('/api/courses', (req, res) => {
     res.send(courses);
 });
 
 app.post('/api/courses', (req, res) => {
  const {error} = Joi.validate(req.body);
  if(error) return res.status(400).send(error.details[0].message);  
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});


app.put('/api/courses/:id', (req, res) => {
  const course =courses.find(c=> c.id === parseInt(req.params.id));
  if(!course) return res.status(404).send('the course with the given id was not found');
  const {error} = Joi.validate(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  course.name = req.body.name;
  res.send(course);
});

function validateCourse(course) {
    const schema = {
        name:Joi.string().min(3).required()
    };
}

app.delete('/api/courses/:id', (req, res) => {
    const course =courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('the course with the given id was not found');
    
    //delete
    const index = courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
});
 app.get('/api/courses/:id', (req, res) => {
    const course =courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('the course with the given id was not found');
    res.send(course);
});
//  app.get('/api/courses/:id', (req, res) => {
//   res.send(req.params.id);
// })
// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.params);
// });
// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.query);
// });
 //port IN TERMINAL :export PORT=5000//NO SPACE;
 const port = process.env.PORT || 3000;
 app.listen(port, () => console.log(`Listening on port ${port}`));