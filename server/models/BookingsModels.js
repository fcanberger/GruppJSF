const mongoose = require('mongoose')

const bookingTemplate = new mongoose.Schema({
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customers',
        required: true
    },
    AOP:{ //Amount Of People
        type:Number,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    },
    time:{
        type: String,
        required: true
    }
})

const bookingModel = mongoose.model('bookings', bookingTemplate)

module.exports = bookingModel;