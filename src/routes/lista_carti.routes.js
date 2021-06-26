// Routes for carti endpoint

const express = require('express');
const router = express.Router();

const Lista_Carti = require('../Models/Lista_Carti');

router.post('/create', async (req, res) => {
    const Lista_CartiApi = req.body
    console.log(Lista_CartiApi)
    const response = await Lista_CartiApi.create(Lista_CartiApi);
    console.log(response)
    res.json({ response })
})

router.get('/get', async (req, res) => {
    const ListaCarti = await Lista_Carti
        .find({})
        .populate('Autor')

    res.json(ListaCarti)
    console.log('Response => ', ListaCarti)
})

module.exports = router;