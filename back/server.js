require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dataRoutes = require('./routes/dataRoutes')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors({origin: 'http://localhost:4000'}))

app.use((req, res, next) => {
  next()
})

// app.use('/api/data', dataRoutes)

app.listen(4000, () => {
    console.log('listening for requests on port', process.env.PORT)
})