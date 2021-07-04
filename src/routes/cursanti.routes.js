// Routes for carti endpoint

const express = require('express');
const router = express.Router();

const CursantiModel = require('../Models/Cursanti');

router.post('/create', async (req, res) => {
    const CursantiApi = req.body
    console.log(CursantiApi)
    const newCoursant = await CursantiModel.create(CursantiApi);
    const response = await CursantiModel.findOne(newCoursant).populate("Cod_Curs")
    console.log(response)
    res.json({ response })
})

router.get('/get', async (req, res) => {
    const ListaCursanti = await CursantiModel
        .find({})
        .populate("Cod_Curs")
    res.json(ListaCursanti)
    console.log('Response => ', ListaCursanti)
})
router.delete('/delete', async (req, res) => {
    const CursantiApi = req.body
    console.log(CursantiApi)
    const response = await CursantiModel.deleteOne(CursantiApi);
    console.log(response)
    res.json({ status: 'ok', response })
})

module.exports = router;