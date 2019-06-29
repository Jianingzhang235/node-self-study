const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags:[String],
    date: {type: Date, Default: Date.now()},
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function creatCourse(){
    const course = new Course({
    name: 'node',
    author: 'Jianing',
    tags:['node', 'backend'],
    date: Date.now(),
    isPublished: true
});
const result = await course.save();
console.log(result);

}

async function getCourses() {
  const courses = await Course
    .find({author: 'Jianing', isPublished: true})
    .limit(10)
    .sort({date: -1})
    .select({name: 2, tags: 2});
  console.log(courses);
}
getCourses();