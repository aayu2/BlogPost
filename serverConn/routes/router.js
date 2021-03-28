const express = require('express')
const route = express.Router()
const controller = require('../controller/post');
const services = require('../services/render')

//ui routes
route.get('/', services.homeRoutes);
route.get('/blog-sheet', services.blogSheet);


//apis route
route.get('/api/posts', controller.find);
route.post('/api/posts', controller.create);


module.exports = route