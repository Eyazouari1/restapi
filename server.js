const express=require("express");
const app=express();
var bodyParser = require('body-parser')
const connect = require("./config/connectdb");
const User = require("./models/User");
// const { findByIdAndUpdate } = require("./model/user")
require('dotenv').config({ path: './config/.env' });
connect();
app.use(bodyParser.json())
app.use(express.json())
app.post('/add',async(req,res)=>{
    const{fullName,phone,email}=req.body
    try {
       const newuser= new User({
        fullName,
        phone,
        email,
       })
       await newuser.save()
       res.send('user successful ')
    } catch (error) {
      console.log(error.message)  
    }
})
app.get('/get',async(req,res)=>{
        const users= await User.find()
        res.send(users)
})
app.get('/user/:id',async(req,res)=>{
    const user=await User.findById(req.params.id)
    res.send(user)
})
app.put("/update/:id",async(req,res)=>{
    try {
        const update=await User. findByIdAndUpdate(req.params.id,{...req.body},{new:true})
        res.send(update)
    } catch (error) {
       console.log(error) 
    }
})
app.delete('/delete/:id',async(req,res)=>{
    try {
        await  User.findByIdAndDelete(req.params.id)
        res.send('user deleted')
    } catch (error) {
      console.log(error)  
    }
})
const PORT=process.env.PORT||5000;
app.listen(PORT,(error)=>{error?console.error(error):console.log(`the server successful running ${PORT}`)})