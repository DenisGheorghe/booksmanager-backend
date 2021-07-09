// Routes for carti endpoint

const express = require('express');
const Logger = require('../logger');
const cors = require('cors');

const router = express.Router();
const Fise_ImprumutModel = require('../Models/Fise_Imprumut');

router.post('/create', async (req, res) => {
    const Fise_ImprumutApi = req.body
    Logger.debug(Fise_ImprumutApi)
    const response = await Fise_ImprumutModel.create(Fise_ImprumutApi)
    Logger.debug(response)
    res.json({ status: 'ok' })
});

router.get('/get', async (req, res) => {
    const Fise_Imprumut = await Fise_ImprumutModel
        .find({})
        .populate('Carti.Cod_Carte')
        .populate('Cod_Curs')
        .populate('Cod_Cursant')
        .populate('Cod_Angajat')

    res.json(Fise_Imprumut)
    Logger.debug('Response => ', Fise_Imprumut)
});

router.get('/get/between/:query1/and/:querry2', async (req, res) => {
    let query3 = req.params.query1;
    let query4 = req.params.querry2;
    let response = await Fise_ImprumutModel.find({}).populate('Carti.Cod_Carte')
        .populate('Cod_Curs')
        .populate('Cod_Cursant')
        .populate('Cod_Angajat')
    response = response.filter(imprumut => imprumut.Data_Retur && imprumut.Data_Retur >= query3 && imprumut.Data_Retur <= query4)
    Logger.debug(response)
    res.json(response)
})

router.get('/get/cursant/:query5/between/:query1/and/:querry2', async (req, res) => {
    let query6 = req.params.query5;
    let query3 = req.params.query1;
    let query4 = req.params.querry2;
    let response = await Fise_ImprumutModel.find({}).populate('Carti.Cod_Carte')
        .populate('Cod_Curs')
        .populate('Cod_Cursant')
        .populate('Cod_Angajat')
    response = response.filter(imprumut => imprumut.Data_Retur && imprumut.Data_Retur >= query3 && imprumut.Data_Retur <= query4 && imprumut.Cod_Cursant == query6)
    Logger.debug(response)
    res.json(response)
})

router.get('/get/curs/:query', cors(), async (req, res) => {
    let query = req.params.query;
    const response = await Fise_ImprumutModel.find({ 'Cod_Curs': query }).populate('Carti.Cod_Carte')
        .populate('Cod_Curs')
        .populate('Cod_Cursant')
        .populate('Cod_Angajat')
    Logger.debug(response)
    res.json(response)
})
router.get('/get/cursant/:query', cors(), async (req, res) => {
    let query = req.params.query;
    const response = await Fise_ImprumutModel.find({ 'Cod_Cursant': query }).populate('Carti.Cod_Carte')
        .populate('Cod_Curs')
        .populate('Cod_Cursant')
        .populate('Cod_Angajat')
    Logger.debug(response)
    res.json(response)
})

router.put('/update', async (req, res) => {
    const AutoriApi = req.body
    Logger.debug(AutoriApi)
    const response = await AutoriModel.updateOne(AutoriApi);
    Logger.debug(response)
    res.json({ status: 'ok', response })
})

router.delete('/delete', async (req, res) => {
    const AutoriApi = req.body
    Logger.debug(AutoriApi)
    const response = await AutoriModel.deleteOne(AutoriApi);
    Logger.debug(response)
    res.json({ status: 'ok', response })
})

module.exports = router;