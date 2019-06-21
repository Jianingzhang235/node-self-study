//Lesson1:
// function sayHello(name) {
//     console.log('Hello ' + name);
// }

// sayHello('Mosh');

//lesson2: Module;
//in node, every file is a module;
// console.log(module);

//lesson3: requrie function;

const logger = require('./logger');
console.log(logger);
logger.log('message');