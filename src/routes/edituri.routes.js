// Routes for carti endpoint

const express = require('express');
const router = express.Router();

const EdituriModel = require('../Models/Edituri');
const Logger = require('../logger');



router.post('/create', async (req, res) => {
    const Test = req.body
    Logger.debug(Test)
    const response = await EdituriModel.create(Test);
    Logger.debug(response)
    res.json(response)
})

router.get('/get', async (req, res) => {
    const ListaEdituri = await EdituriModel
        .find({})

    res.json(ListaEdituri)
    Logger.debug('Response => ', ListaEdituri)
})

router.delete('/delete', async (req, res) => {
    const EdituriApi = req.body
    Logger.debug(EdituriApi)
    const response = await EdituriModel.deleteOne(EdituriApi);
    Logger.debug(response)
    res.json(response)
})


module.exports = router;