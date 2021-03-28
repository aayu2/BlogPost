const axios = require('axios');
exports.homeRoutes = (req, res) => {
  // Make a get request to /api/users
  axios.get('http://localhost:3000/api/posts')
    .then(function (response) {
      console.log(response)
      res.render('index', { users: response.data });
    })
    .catch(err => {
      res.send(err);
    })
}

exports.blogSheet = (req, res) => {
  // Make a get request to /api/users
  axios.get(`http://localhost:3000/api/posts?id=${req.id}`)
    .then(function (response) {
      console.log(response)
      res.render('viewPost', { users: response.data });
    })
    .catch(err => {
      res.send(err);
    })
}