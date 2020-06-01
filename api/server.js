const express = require("express"); 
const helmet = require("helmet");
const ProjectRouter = require('../projects/projects-router.js')
const server = express();

server.use(helmet()); 
server.use(express.json()); 
server.use('/api/projects',ProjectRouter)


server.get("/",(req, res) => {
  res.send(`
    <h2>Delfin Mongende Sprint</h2>
    <p>Lambda Coding School</p>
  `);
});


module.exports = server;