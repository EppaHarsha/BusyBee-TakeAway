const express = require('express');
const mongoose = require('mongoose');
const Burgers = require("./models/burger");
const app = express();
const port = 8000;
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/BusyBee');
}

app.get("/",(req,res)=>{
    res.send("Hello");
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})