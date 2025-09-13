const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name:String,
    subject:String,
    experience: Number
});

module.exports  = mongoose.model("Teacher",teacherSchema)