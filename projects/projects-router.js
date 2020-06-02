const express = require("express");

const delfin = require("./projects.model.js");
//  will need this to be able to use the model for this and all routes

const router = express.Router(); 

router.get("/", (req, res) => {
    delfin.findProject()
       .then( projects => {
            res.status(200).json(projects);
       }) 
       .catch( err => {
            res.status(500).json(err);
       })
});

router.get('/:id', (req, res) => {
     const { id } = req.params;
     delfin.findById(id)
   .then(project => {
     res.status(200).json(project);
   })
   .catch(err => {
     res.status(500).json({ message: 'Failed to get Project' });
   });
 });


router.post("/", (req, res) => {
     const body = req.body
     delfin.addProject(body)
        .then( projects => {
             res.status(200).json(body);
        }) 
        .catch( err => {
             res.status(500).json(err);
        })
 });

 router.post("/:id/task",(req,res) => {
     const body = req.body;
     const { id } = req.params;

     delfin.findById(id)
     .then(project => {
          if (project) {
               delfin.addTask(body, id)
                 .then(task => {
                    res.status(201).json(task);
               })
          } else {
               res.status(404).json({ message: 'Could not find Project with given id.' })
          }
     })
     .catch((err) => {
          res.status(500).json({ message: 'Failed to create new step' })
     })
     // delfin.addTask(body)
     //   .then( tasks => {
     //      res.status(200).json(body);
     //   })
     //   .catch( err => {
     //      res.status(500).json(err); 
     //   })
 })

 router.get("/:id/task", (req, res) => {
     const { id } = req.params
     delfin.findById(id)
        .then( project => {
             if(project) {
               delfin.findTask()
        .then( task => {
             res.status(200).json(task);
        }) }else{
             res.status(400).json({msg:'no project'})
        }
        })
     
        .catch( err => {
             res.status(500).json(err);
        })
 });

module.exports = router;