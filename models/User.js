const mongoose=require("mongoose")
const Schema=mongoose.Schema;
const  userSchema= new Schema({
    fullName:String,
    phone:String,
    email:String,
})
module.exports=mongoose.model("User",userSchema)
