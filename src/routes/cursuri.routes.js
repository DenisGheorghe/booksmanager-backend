// Routes for carti endpoint

const express = require('express');
const router = express.Router();

const CursuriModel = require('../Models/Cursuri');

router.post('/create', async (req, res) => {
    const CursuriApi = req.body
    console.log(CursuriApi)
    const response = await CursuriModel.create(CursuriApi);
    console.log(response)
    res.json({ response })
})

router.get('/get', async (req, res) => {
    const ListaCursuri = await CursuriModel
        .find({})
    res.json(ListaCursuri)
    console.log('Response => ', ListaCursuri)
})
router.delete('/delete', async (req, res) => {
    const cursuriApi = req.body
    console.log(cursuriApi)
    const response = await CursuriModel.deleteOne(cursuriApi);
    console.log(response)
    res.json({ status: 'ok', response })
})

module.exports = router;