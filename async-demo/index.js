console.log('Before');
getUser(1, (user)=> {

  getRepositories(user.gitHubUsername,(repos) => {
    console.log('repos', repos);
  });
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

function getRepositories(username, callback) {
    setTimeout(()=> {
        console.log('calling github api...');
        callback (['repo1','repo2','repo3']);

    },2000);
}