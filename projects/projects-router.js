const express = require("express");

const delfin = require("./projects.model.js");
//  will need this to be able to use the model for this and all routes

const router = express.Router(); 

router.get("/", (req, res) => {
    delfin.findProject()
       .then( projects => {
            res.status(200).json(projects);
       }) 
       .catch( error => {
            res.status(500).json("ERROR");
       })
});

module.exports = router;