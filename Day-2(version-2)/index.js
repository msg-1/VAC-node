const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentRouter = require("./routes/student");

const teacherRouter = require("./routes/teacher")

const app = express(); // to get the methods which are present inside express

app.use(cors());
app.use(express.json())// json data into js understandable language

mongoose.connect("mongodb+srv://wt19:wt19@cluster0.jbvsgar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("mongodb connected"))
.catch(err => console.log(err));

app.get("/",function(request, response){
    response.send("welcome to session 2");
});

app.use("/students", studentRouter);
app.use("/teachers",teacherRouter)

app.listen(4567, function(){
    try{

        console.log("server is running on 3000 ")
    }
    catch(error){
        console.log("error",error)
    }
})