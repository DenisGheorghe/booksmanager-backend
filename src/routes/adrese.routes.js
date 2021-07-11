// Routes for carti endpoint

const express = require('express');
const router = express.Router();

const AdreseModel = require('../Models/Adrese');

router.post('/create', async (req, res) => {
    const AdreseApi = req.body
    console.log(AdreseApi)
    const response = await AdreseModel.create(AdreseApi);
    console.log(response)
    res.json({ response })
});

router.get('/get', async (req, res) => {
    const ListaAdrese = await AdreseModel
        .find({})
        .populate('Autor')

    res.json(ListaAdrese)
    console.log('Response => ', ListaAdrese)
});
router.delete('/delete', async (req, res) => {
    const AdreseApi = req.body
    console.log(AdreseApi)
    const response = await AdreseModel.deleteOne(AdreseApi);
    console.log(response)
    res.json(response)
})

module.exports = router;