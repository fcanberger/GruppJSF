const mongoose = require('mongoose')

const adminResTemplate = new mongoose.Schema({
    AOP:{
        type:Number,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    },
    time:{
        type: String,
        required: true,
    },
    customerName:{
        type: String,
        required: true
    },
    customerEmail:{
        type: String,
        required: true,
    },
    customerNumber:{
        type: Number,
        required: true
    }
})

const adminResModel = mongoose.model('AdminReservation', adminResTemplate)

module.exports = adminResModel