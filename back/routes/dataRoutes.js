const express = require('express')
const getNASAData = require('../nasa_api')
const { NASA_API_ROUTES } = require('../nasa_api/consts')
const sendMessage = require('../sendGrid/sendEmail')


const router = express.Router()

//Nasa
router.get('/flr', async (req, res) => { 
    res.json(await getNASAData(NASA_API_ROUTES.FLR));
})

router.get('/cme', async (req, res) => {
    res.json(await getNASAData(NASA_API_ROUTES.CME));
})

router.get('/wsa', async (req, res) => {
    res.json(await getNASAData(NASA_API_ROUTES.WSA));
})

//SendGrid 
router.post('/email', async (req, res) => {
    console.log('got the request')
    const content = req.body.data
    console.log(req.body, 'this is the body!')
    console.log(req.body.data, 'this is the content!')
    console.log(content)
    await sendMessage(content)
})



module.exports = router;