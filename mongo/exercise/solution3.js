const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-exercises', { useNewUrlParser: true });

const courseSchema = new mongoose.Schema({
    tags: [String],
    data: Date,
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);

async  function getCourses () {
    return await Course
        // .find({isPublished: true, tags: {$in: ['backend', 'frontend']}})
        .find({isPublished: true})
        .or([
            {price: {$gte: 15}},
            {name: /.*by.*/i}
        ])
        .sort('-price')
        .select('name author price');
        // console.log(courses);

}

async function run() {
    const courses = await getCourses();
    console.log(courses);
}

run();