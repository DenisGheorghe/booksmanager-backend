// Routes for carti endpoint

const express = require('express');
const router = express.Router();
const Logger = require('../logger');
const CursantiModel = require('../Models/Cursanti');

router.post('/create', async (req, res) => {
    const CursantiApi = req.body
    Logger.debug(CursantiApi)
    const newCoursant = await CursantiModel.create(CursantiApi);
    const response = await CursantiModel.findOne(newCoursant).populate("Cod_Curs")
    Logger.debug(response)
    res.json(response)
})

router.get('/get', async (req, res) => {
    const ListaCursanti = await CursantiModel
        .find({})
        .populate("Cod_Curs")
    res.json(ListaCursanti)
    Logger.debug('Response => ', ListaCursanti)
})

router.put('/update', async (req, res) => {
    const cursantiUpdate = req.body.data;
    Logger.debug(JSON.stringify(cursantiUpdate))
    const updateResultawait = await CursantiModel.updateOne({ _id: cursantiUpdate.id }, cursantiUpdate);
    console.log(updateResultawait);
    const response = await CursantiModel.findOne({ _id: cursantiUpdate.id }).populate("Cod_Curs")
    // Logger.debug(response)
    res.json(response)
})



router.delete('/delete', async (req, res) => {
    const CursantiApi = req.body
    Logger.debug(CursantiApi)
    const response = await CursantiModel.deleteOne(CursantiApi);
    Logger.debug(response)
    res.json(response)
})

module.exports = router;