const mongoose = require('mongoose')

const bookingTemplate = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    AOP:{ //Amount Of People
        type:Number,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const bookingModel = mongoose.model('bookings', bookingTemplate)

module.exports = bookingModel;