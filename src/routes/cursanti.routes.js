// Routes for carti endpoint

const express = require('express');
const router = express.Router();

const CursantiModel = require('../Models/Cursanti');

router.post('/create', async (req, res) => {
    const CursantiApi = req.body
    console.log(CursantiApi)
    const response = await CursantiModel.create(CursantiApi);
    console.log(response)
    res.json({ status: 'ok' })
})

router.get('/get', async (req, res) => {
    const ListaCursanti = await CursantiModel
    .find({})
    .populate('Autor')

    res.json(ListaCursanti)
    console.log('Response => ', ListaCursanti)
})

module.exports = router;