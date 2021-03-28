const express = require('express'); //to use express module
const dotenv = require('dotenv');//inform the server to use variable of env file
const morgan = require('morgan');//to use morgan module
const bodyparser = require("body-parser");
const path = require('path');//path module is in-build in node application, just need to require it.

const connectDB = require('./serverConn/database/connection.js');

const app = express();

dotenv.config({ path: 'config.env' })//allows code to run on server 3000
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));//tiny:token

//mongodb connection
connectDB();

//parse requests
app.use(bodyparser.urlencoded({ extended: true }))

//set view engine
app.set("view engine", "ejs")

//load assets, virtual path for assets
//to load assets inside http server
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))//use: middleware method
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//load routers
app.use('/', require('./serverConn/routes/router'))

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) });