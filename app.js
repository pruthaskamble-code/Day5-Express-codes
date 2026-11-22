const express = require('express');
const { connectDB } = require('./db');
const router = require('./router/empRouter');


connectDB()

const app = express()

app.set("view engine","ejs")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",router)


app.listen(4000,()=>{
    console.log("running...");
})