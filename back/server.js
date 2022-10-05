require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dataRoutes = require('./routes/dataRoutes')



// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  next()
})

app.use('/api', dataRoutes)

app.listen(process.env.PORT, () => {
    console.log('listening for requests on port', process.env.PORT)
})
