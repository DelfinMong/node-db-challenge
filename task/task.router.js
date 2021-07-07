const express = require("express");

const delfin = require("./task.model");
//  will need this to be able to use the model for this and all routes

const router = express.Router();

router.get("/", (req, res) => {
    delfin.findTask()
       .then( task => {
            res.status(200).json(task);
       }) 
       .catch( err => {
            res.status(500).json(err);
       })
});

router.post("/", (req, res) => {
    const body = req.body
    delfin.addTask(body)
       .then( task => {
            res.status(200).json(body);
       }) 
       .catch( err => {
            res.status(500).json(err);
       })
});

module.exports = router