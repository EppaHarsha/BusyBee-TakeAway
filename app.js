const mongoose = require('mongoose');
const insertData = require('./data');
const Steak =require('../models/steaks');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/BusyBee');
}

const init=async()=>{
    await Steak.insertMany(insertData.steaks);
    console.log("Data is inserted");
}
init();
// const c1 = new Coffee({
//     titile:"h",
//     price:100,
//     description:"KKK"
// })
// c1.save()
//     .then((res)=>{console.log(res)})
//     .catch((err)=>{console.log(err)});