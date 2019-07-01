const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

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
    .sort({name: 1})
    .select({name: 1, tags: 1});
  console.log(courses);
}

async function updateCourse(id) {
  const result = await Course.findByIdAndUpdate({_id: id}, {
    $set: {
      author: 'Jack',
      isPublished: true
    }
  }, {new: true});
  console.log(result);
}


async function removeCourse(id) {
  // const result = await Course.deleteOne({_id: id});
  const result = await Course.findByIdAndRemove(id);
  console.log(result);
}

removeCourse('5d19a6256de4651b691922b4');