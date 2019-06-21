const express = require('express');
var path = require('path');

const app = express();

app.use(express.json());

const courses = [
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'}

];

app.get('/', (req, res) => {
    res.send('Hello World');
 })

 app.get('/api/courses', (req, res) => {
     res.send(courses);
 });
 
 app.post('/api/courses', (req, res) => {
     if(!req.body.name || req.body.name.length < 3) {
         res.status(400).send('name is requited and should be minimum 3 characters');
     }
  const course = {
      id: courses.length + 1,
      name: req.body.name
  };
  courses.push(course);
  res.send(course);
});
 app.get('/api/courses/:id', (req, res) => {
    const course =courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) {
        res.status(404).send('the course with the given id was not found');
    }
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