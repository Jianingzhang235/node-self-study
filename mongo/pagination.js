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
    price: Number,
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
    price: 10,
    date: Date.now(),
    isPublished: true
});
const result = await course.save();
console.log(result);

}

async function getCourses() {
    const pageNumber = 2;
    const pageSize =  10;

  const courses = await Course
    .find({author: 'Jianing', isPublished: true})
    .skip((pageNumber -1) * pageSize)
    .limit(pageSize)
    // .sort({name: 1})
    // .select({name: 1, tags: 1});
//   console.log(courses);
}
getCourses();