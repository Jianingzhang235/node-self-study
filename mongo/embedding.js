const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {useNewUrlParser: true})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors: [authorSchema]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}
async function updateAuthor(courseId) {
  const course = await Course.update({_id: courseId}, {
    $set: {
      'author.name': 'John Smith'
    }
  });
}
// updateAuthor('5d1eebac69b9a909b841053d');
createCourse('Node Course', [
  new Author({ name: 'Mosh' }),
  new Author({name: 'John'})
]);
