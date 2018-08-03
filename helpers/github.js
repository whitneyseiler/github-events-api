const request = require('request');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  function callback(error, response, body) {

    var repos = JSON.parse(body);
    console.log(repos)
    // repos.forEach((repo) => {
    //   let data = {
    //     owner: repo.owner.login,
    //     name: repo.name,
    //     html_url: repo.html_url
    //   }
    //   save(data)
    // })
  }
  request(options, callback);
}

module.exports.getReposByUsername = getReposByUsername;
