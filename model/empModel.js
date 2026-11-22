const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        min:12900,
        max:60000,
        required:true
    },
    dept:{
        type:String,
        enum:["IT","Sales","HR"],
        required:true
    }
} , {timestamps:true})

const empModel = mongoose.model("emp",empSchema)

module.exports = empModel