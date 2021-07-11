// Routes for carti endpoint

const express = require('express');
const router = express.Router();

const AngajatiModel = require('../Models/Angajati');

router.post('/create', async (req, res) => {
    const AngajatiApi = req.body
    console.log(AngajatiApi)
    const response = await AngajatiModel.create(AngajatiApi);
    console.log(response)
    res.json(response)
});

router.get('/get', async (req, res) => {
    const ListaAngajati = await AngajatiModel
        .find({})
        .populate('Autor')

    res.json(ListaAngajati)
    console.log('Response => ', ListaAngajati)
});
router.delete('/delete', async (req, res) => {
    const angajatiApi = req.body
    console.log(angajatiApi)
    const response = await AngajatiModel.deleteOne(angajatiApi);
    console.log(response)
    res.json(response)
})

module.exports = router;