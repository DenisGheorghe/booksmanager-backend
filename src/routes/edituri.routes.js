// Routes for carti endpoint

const express = require('express');
const router = express.Router();

const EdituriModel = require('../Models/Edituri');

router.post('/create', async (req, res) => {
    const Test = req.body
    console.log(Test)
    const response = await EdituriModel.create(Test);
    console.log(response)
    res.json({ response })
})

router.get('/get', async (req, res) => {
    const ListaEdituri = await EdituriModel
        .find({})

    res.json(ListaEdituri)
    console.log('Response => ', ListaEdituri)
})

router.delete('/delete', async (req, res) => {
    const EdituriApi = req.body
    console.log(EdituriApi)
    const response = await EdituriModel.deleteOne(EdituriApi);
    console.log(response)
    res.json({ status: 'ok', response })
})


module.exports = router;