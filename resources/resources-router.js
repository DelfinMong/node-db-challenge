const express = require("express");

const delfin = require("./resources-mode.js");
//  will need this to be able to use the model for this and all routes

const router = express.Router(); 

router.get("/", (req, res) => {
    delfin.find()
       .then( resource => {
            res.status(200).json(resource);
       }) 
       .catch( err => {
            res.status(500).json({msg:'Failed'});
       })
});

router.post('/', (req, res) => {
	const body = req.body

	delfin.addProject(body)
		.then(resource => {
			res.status(201).json(body)
		})
		.catch((err) => {
			res.status(500).json({ msg: 'Failed' })
		})
})


module.exports = router