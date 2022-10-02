const express = require('express')
const getNASAData = require('../nasa_api')
const { NASA_API_ROUTES } = require('../nasa_api/consts')
const router = express.Router()

router.get('/flr', async (req, res) => { 
    res.json(await getNASAData(NASA_API_ROUTES.FLR));
})

router.get('/cme', async (req, res) => {
    res.json(await getNASAData(NASA_API_ROUTES.CME));
})

router.get('/wsa', async (req, res) => {
    res.json(await getNASAData(NASA_API_ROUTES.WSA));
})

module.exports = router;