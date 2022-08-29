const mongoose = require('mongoose')

const customerTemplate = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    number:{
        type: Number,
        required: true
    }
})

const customerModel = mongoose.model('customers', customerTemplate)

module.exports = customerModel;