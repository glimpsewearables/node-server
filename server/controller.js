// const Tasks = require("./models.js")
// module.exports = {
//     allTasks: (req,res)=>Tasks.find({})
//     .then(data=>console.log("retrieve all tasks")||res.json(data))
//     .catch(errs=>console.log(errs)||res.json(errs)),

//     oneTask: (req,res)=>Tasks.find({_id: req.params.taskId})
//     .then(data=>console.log("retrieve single task")||res.json(data))
//     .catch(errs=>console.log(errs)||res.json(errs)),

//     createTask: (req,res)=>Tasks.create(req.body)
//     .then(data=>console.log("created new task")||res.json(data))
//     .catch(errs=>console.log(errs)||res.json(errs)),

//     updateTask: (req, res)=>Tasks.update({_id: req.params.taskId},req.body)
//     .then(data=>console.log("updated task")||res.json(data))
//     .catch(errs=>console.log(errs)||res.json(errs)),

//     deleteTask: (req, res)=>Tasks.deleteOne({_id: req.params.taskId})
//     .then(data=>console.log("deleted task")||res.json(data))
//     .catch(errs=>console.log(errs)||res.json(errs)),
// }