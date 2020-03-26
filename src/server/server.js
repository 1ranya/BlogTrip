const express = require('express')
const app = express()
const mongoose = require('mongoose')
const DATABASE_URL="mongodb://127.0.0.1:27017"
require('dotenv').config()

mongoose.connect(DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const route = require('../routers/routes') 
app.use('/routes', route)

app.listen(3000, () => console.log('server started'))

