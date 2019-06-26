console.log('Before');
getUser(1, function(user) {
    console.log('User', user);
});
console.log('After');
// console.log(user);

//three ways:
  //callbacks
  //promises
  //async/await

function getUser(id, callback) {
    setTimeout(()=> {
        console.log('Reading a user from a database...');
        callback ({id: id, gitHubUsername: 'mosh'});
    },2000);
    
}