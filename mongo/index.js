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
// creatCourse();

async function getCourses() {
    //Comparison Query Operators

    //eq (equal)
    //ne (not equal)
    //gt (greater than)
    //gte (greater than or equal to)
    //lt (less than)
    //lte (less than or equal to)
    //in
    //nin (not in)
  const courses = await Course
    // .find({author: 'Jianing', isPublished: true})
    // .find({price: 10})
    // .find({price: {$gte: 10, $lse: 20}})
    .find({price: {$in: [10,15,20]}})
    .limit(10)
    .sort({date: -1})
    .select({name: 2, tags: 2});
  console.log(courses);
}
getCourses();