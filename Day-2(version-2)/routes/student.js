const express = require("express");

const fs = require("fs");
const Student = require("../models/Student");

const router = express.Router(); 
// this is used to create routes 

//local db usage only
//  function readDB(){
//    return JSON.parse(fs.readFileSync("./db.json", "utf-8"));

// }
// function writeDB(data){
//     fs.writeFileSync("./db.json", JSON.stringify(data,null,2))
// }

//GET Route
router.get('/', async function(request, response){
  
    const students = await Student.find(); // all the students details
    response.json(students);
});

// POST ROUTE 
router.post("/",async function(request,response){

    const student = new Student(request.body);// accessing from users
    await student.save(); // save to data base
    response.json(student);
   
})
// Update Route
router.put("/:id", async function(request,response){

    const student = await Student.findByIdAndUpdate(request.params.id,request.body,{new:true})
    response.json(student);
})

//DELETE ROUTE
router.delete("/:id", async function(request,response){

await Student.findByIdAndDelete(request.params.id);
response.json({message:"student deleted"})

})


module.exports = router;