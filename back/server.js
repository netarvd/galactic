const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()

router.get('/', (req, res) => { 

})
 
app.use(cors({origin: 'http://localhost:3000'}))

 
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 