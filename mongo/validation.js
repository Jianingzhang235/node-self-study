const mongoose = require('mongoose');//validation , 验证；
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
        // match: /pattern/
    },
    category: {
       type: String,
       required: true,
       enum: ['web', 'mobile', 'network']
    },
    author: {type: String, required: true},
    tags: {
        type: Array,
        // validate: function(v) {
        //   return new Promise(function(resolve, reject) {
        //     setTimeout(function() {
        //       resolve(false);
        //     }, 1000);
        //   });
        // }
        validate: {
            isAsync: true,
          validator: async function(v, callback) {
              setTimeout(() => {
                const result = v && v.length > 0;
                callback(result);
              }, 1000);   
        },
        message: 'A course should have at least one tag.'
      }
    },
    date: {type: Date, Default: Date.now()},
    isPublished: Boolean,
    price: {
        type: Number,
        required: function() {return this.isPublished; },
        min: 10,
        max: 200
    },
});

const Course = mongoose.model('Course', courseSchema);

async function creatCourse(){
  const course = new Course({
    name: 'nodemon',
    author: 'Jianing',
    category: '-',
    tags:[],
    isPublished: true,
    price: 10
  });

  try {
    const result = await course.save();
    console.log(result);  
  }
  catch(ex){
    for (field in ex.errors)
    console.log(ex.errors[field].message);
  }
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

creatCourse();