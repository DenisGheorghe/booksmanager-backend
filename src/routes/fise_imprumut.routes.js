// Routes for carti endpoint

const express = require('express');
const router = express.Router();

const Fise_ImprumutModel = require('../Models/Fise_Imprumut');

router.post('/create', async (req, res) => {
    const Fise_ImprumutApi = req.body
    console.log(Fise_ImprumutApi)
    const response = await Fise_ImprumutModel.create(Fise_ImprumutApi);
    console.log(response)
    res.json({ status: 'ok' })
});

router.get('/get', async (req, res) => {
    const Fise_Imprumut = await Fise_ImprumutModel
    .find({})
    .populate('Autor')

    res.json(Fise_Imprumut)
    console.log('Response => ', Fise_Imprumut)
});

module.exports = router;