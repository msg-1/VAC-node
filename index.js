const express = require("express");

const studentRouter = require("./routes/student");

const teacherRouter = require("./routes/teacher")

const app = express(); // to get the methods which are present inside express

app.use(express.json())// json data into js understandable language


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