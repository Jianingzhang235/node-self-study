// 2/node module system -6.Module wrapper function
console.log(__filename);
console.log(__dirname);

var url = 'http://mylogger.io/log';
function log(message) {
    console.log(message);
}
module.exports.log = log;
// module.exports.endPoint = url;
// 2/node module system - 7. path module;
//filesystem, http, os, path, process, query strings, stream

