console.log('Before');
//callback-based approach
//
// getUser(1, (user) => {
//     getRepositories(user.gitHubUsername,(repos)=>{
//         getCommits(repos[0],(commits)=>{
//             console.log(commits);
//         })
//     })
// });

//Promise-based approach
//
// getUser(1)
//   .then(user=> getRepositories(user.gitHubUsername))
//   .then(repos=> getCommits(repos[0]))
//   .then(commits=> console.log('commits', commits))
//   .catch(err => console.log('Error', err.message));
// Async and Await approach
async function displayCommits() {
    const user = await getUser(1); 
    const repos = await getRepositories(user.gitHubUsername);
    const commits =await getCommits(repos[0]);
    console.log(commits);
}
displayCommits()

 
console.log('After');

function getUser(id) {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      console.log('Reading a user from a database...');
      resolve ({id: id, gitHubUsername: 'mosh'});
    },2000);
 });
}


function getRepositories(username) {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
        console.log('calling github api...');
        resolve(['repo1','repo2','repo3']);
    },2000);
});
}

function getCommits(repo) {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
        console.log('calling github api...');
        resolve ('commit');
    },2000);
  });
}