    const EventEmitter = require('events');

const Logger = require('./logger1');
const logger = new Logger();

logger.on('messageLogged', (arg)=>{
    console.log('listener called', arg);
})
//making a noise, produce...

logger.log('message');