const mongoose = require('mongoose')
const User = require('../model/user')

exports.getUsers = async (req,res) => {
    try {
       const  data  = await User.find()
       console.log(data);
       res.status(200).json(data) 
    } catch (error) {
        console.log(error);
    }
}
exports.createUser = async (req,res) => {
    const { name, email, password } = req.body
    try {
       const data  = await User.create({name, email, password})
       res.json({msg: "user created", data}) 
    } catch (error) {
        console.log(error);
    }
}

exports.deleteUser = async (req,res) => {
    const {id : _id} = req.params
    console.log(_id)
    try {
        await User.deleteOne({_id})
        console.log("id deleted")
       res.json({msg: "id deleted"}) 
    } catch (error) {
        console.log(error);
    }
}