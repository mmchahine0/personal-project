const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  fullname: {
    type: string
  }
})


module.exports = mongoose.model('User', userSchema)