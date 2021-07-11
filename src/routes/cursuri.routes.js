// Routes for carti endpoint

const express = require('express');
const router = express.Router();
const Logger = require('../logger');
const CursuriModel = require('../Models/Cursuri');

router.post('/create', async (req, res) => {
    const CursuriApi = req.body
    Logger.debug(CursuriApi)
    const response = await CursuriModel.create(CursuriApi);
    Logger.debug(response)
    res.json({ response })
})

router.get('/get', async (req, res) => {
    const ListaCursuri = await CursuriModel
        .find({})
    res.json(ListaCursuri)
    Logger.debug('Response => ', ListaCursuri)
})
router.delete('/delete', async (req, res) => {
    const cursuriApi = req.body
    Logger.debug(cursuriApi)
    const response = await CursuriModel.deleteOne(cursuriApi);
    Logger.debug(response)
    res.json(response)
})

module.exports = router;