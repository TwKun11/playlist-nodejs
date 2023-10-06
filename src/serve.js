
const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
// console.log(process.env)
// get the client



const port = process.env.PORT || 8001;
const hostname = process.env.HOST_NAME;
const webRoute = require('./route/web')
const connection = require('./config/database')
// config view engine
configViewEngine(app)

// connection.execute(
//     'select * from Users u',
//     function (err, results, fields) {
//         console.log('results =', results); // results contains rows returned by server

//         // If you execute same statement again, it will be picked from a LRU cache
//         // which will save query preparation time and give better performance
//     }
// );
// khai bao route
// config get input
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(webRoute)
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})