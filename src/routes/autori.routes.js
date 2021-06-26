// Routes for autori endpoint

const express = require('express');
const router = express.Router();

const AutoriModel = require('../Models/Autori');

//CRUD Create Autori
router.post('/create', async (req, res) => {
    const AutoriApi = req.body
    console.log(AutoriApi)
    const response = await AutoriModel.create(AutoriApi);
    console.log(response)
    res.json(response)
});


router.get('/get', async (req, res) => {
    const ListaAutori = await AutoriModel
        .find({})

    res.json(ListaAutori)
    console.log('Response => ', ListaAutori)
})

router.put('/update', async (req, res) => {
    const AutoriApi = req.body
    console.log(AutoriApi)

    const response = await AutoriModel.updateOne(AutoriApi);
    console.log(response)
    res.json({ status: 'ok', response })
})

router.delete('/delete', async (req, res) => {
    const AutoriApi = req.body
    console.log(AutoriApi)

    const response = await AutoriModel.deleteOne(AutoriApi);
    console.log(response)
    res.json({ status: 'ok', response })
})

module.exports = router;