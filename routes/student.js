const express = require("express");

const fs = require("fs");

const router = express.Router(); 
// this is used to create routes 

 function readDB(){
   return JSON.parse(fs.readFileSync("./db.json", "utf-8"));

}


function writeDB(data){
    fs.writeFileSync("./db.json", JSON.stringify(data,null,2))
}

//GET Route
router.get('/', function(request, response){
    const db = readDB();
    response.json(db.students);
});

// POST ROUTE 
router.post("/",function(request,response){
    const db= readDB();

    const newStudent = {id: Date.now(), ...request.body };
    db.students.push(newStudent);
    writeDB(db);
    response.status(201).json(newStudent);
})

// Update Route
router.put("/:id",function(request,response){

    const db = readDB();
    const id = parseInt(request.params.id);
    let student = db.students.find(ele => ele.id === id);
    
    if(!student){
        return response.status(404).json({error:"student not found"})
    }else{
        db.students = db.students.map(ele =>(ele.id ===id ? {...ele, ...request.body}: ele))
        writeDB(db);
        response.json({message:"student updated"})
    }

})

//DELETE ROUTE
router.delete("/:id",function(request,response){
    const db= readDB();
        const id = parseInt(request.params.id);

    db.students = db.students.filter(ele =>ele.id !==id);
    writeDB(db);
    response.json({message:"student deleted",id})
})


module.exports = router;