// Routes for carti endpoint

const express = require('express');
const router = express.Router();
var cors = require('cors');

const Fise_ImprumutModel = require('../Models/Fise_Imprumut');

router.post('/create', async (req, res) => {
    const Fise_ImprumutApi = req.body
    console.log(Fise_ImprumutApi)
    const response = await Fise_ImprumutModel.create(Fise_ImprumutApi)
    console.log(response)
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
    console.log('Response => ', Fise_Imprumut)
});

router.get('/get/between/:query1/and/:querry2', async (req, res) => {
    var query3 = req.params.query1;
    var query4 = req.params.querry2;
    let response = await Fise_ImprumutModel.find({}).populate('Carti.Cod_Carte')
        .populate('Cod_Curs')
        .populate('Cod_Cursant')
        .populate('Cod_Angajat')
    response = response.filter(imprumut => imprumut.Data_Retur && imprumut.Data_Retur >= query3 && imprumut.Data_Retur <= query4)
    console.log(response)
    res.json(response)
})

router.get('/get/cursant/:query5/between/:query1/and/:querry2', async (req, res) => {
    var query6 = req.params.query5;
    var query3 = req.params.query1;
    var query4 = req.params.querry2;
    let response = await Fise_ImprumutModel.find({}).populate('Carti.Cod_Carte')
        .populate('Cod_Curs')
        .populate('Cod_Cursant')
        .populate('Cod_Angajat')
    response = response.filter(imprumut => imprumut.Data_Retur && imprumut.Data_Retur >= query3 && imprumut.Data_Retur <= query4 && imprumut.Cod_Cursant == query6)
    console.log(response)
    res.json(response)
})

router.get('/get/curs/:query', cors(), async (req, res) => {
    var query = req.params.query;
    const response = await Fise_ImprumutModel.find({ 'Cod_Curs': query }).populate('Carti.Cod_Carte')
        .populate('Cod_Curs')
        .populate('Cod_Cursant')
        .populate('Cod_Angajat')
    console.log(response)
    res.json(response)
})
router.get('/get/cursant/:query', cors(), async (req, res) => {
    var query = req.params.query;
    const response = await Fise_ImprumutModel.find({ 'Cod_Cursant': query }).populate('Carti.Cod_Carte')
        .populate('Cod_Curs')
        .populate('Cod_Cursant')
        .populate('Cod_Angajat')
    console.log(response)
    res.json(response)
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