// const mongoose = require("mongoose")
// const TaskSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         default: "",
//     },
//     completed: {
//         type: Boolean,
//         default: false,
//     },
    
// },{timestamps: true});

// mongoose.connect("mongodb://localhost:27017/restful-tasks-api-db", {useNewUrlParser: true}, (errs)=>console.log(errs?errs:"db is fine"));

// module.exports = mongoose.model("Task", TaskSchema)