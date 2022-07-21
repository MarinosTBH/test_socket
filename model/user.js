const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    name: String, 
    email: String, 
    passowrd : String
})

const User = mongoose.model('userModel', userModel)

module.exports = User