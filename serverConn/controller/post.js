var Post = require('../model/post');

exports.find = (req, res) => {

  if (req.query.id) {
    const id = req.query.id;

    Post.findById(id)
      .then(data => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id " + id })
        } else {
          res.send(data)
        }
      })
      .catch(err => {
        res.status(500).send({ message: "Erro retrieving user with id " + id })
      })

  } else {
    Post.find()
      .select('heading')
      .then(user => {
        res.send(user)
      })
      .catch(err => {
        res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
      })
  }
}

exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be emtpy!" });
    return;
  }

  console.log(req);
  // new user
  const post = new Post({
    heading: req.body.heading,
    description: req.body.description,
    createdBy: req.body.createdBy,
    createdOn: req.body.createdOn
  })

  // save user in the database
  post
    .save(post)
    .then(data => {
      res.send(data)
      // res.redirect('/add-user');
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating a create operation"
      });
    });

}