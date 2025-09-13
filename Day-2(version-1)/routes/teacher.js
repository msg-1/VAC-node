const express = require("express");
const fs = require("fs");
const router = express.Router();

 function readDB(){
   return JSON.parse(fs.readFileSync("./db.json", "utf-8"));

}

router.get("/", function(request,response){
    const db = readDB();
    response.send(db.teachers);
})


module.exports=router;