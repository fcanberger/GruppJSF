const { response } = require('express')
const express = require('express')
const { request } = require('http')
const router = express.Router()
const bookingModel = require('../models/BookingsModels.js')

router.get("/booking", (req, res) => {

});


router.post('/booking', (req, res) => {
    const bookingTable = new bookingModel ({
        firstName: req.body.firstName,
        number: req.body.number,
        email: req.body.email,
        AOP: req.body.AOP
    })
    bookingTable.save()
    .then(data=> {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})


module.exports = router