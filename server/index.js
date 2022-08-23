const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.CONNECTION_STRING, () => console.log('Database connected'))


app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(8000, () => {
    console.log("http://localhost:8000");
  });