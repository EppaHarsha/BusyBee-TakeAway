
const mongoose = require('mongoose');
const pizzaSchema = new mongoose.Schema({
    title:String,
    image:{
        type:String,
        default:"https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       ,set:(v)=> v===""
       ?"https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        :v,
    },
    description:String,
    price:Number
})
const Pizza = mongoose.model("Pizza",pizzaSchema);
module.exports=Pizza;
