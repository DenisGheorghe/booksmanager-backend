// Routes for autori endpoint

const express = require('express');
const router = express.Router();
var cors = require('cors');

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

router.get('/get/:id', async (req, res) => {
    const ListaAutori = await AutoriModel
        .findById(req.params.id).then(authfound => {
            if (!authfound) { return res.status(404).end(); }
            return res.status(200).json(authfound);
        })
        .catch(err => next(err));

    res.json(ListaAutori)
    console.log('Response => ', ListaAutori)
})

router.get('/get/querry/:query', cors(), function (req, res) {
    var query = req.params.query;

    AutoriModel.find({
        'Nume_Autor': query
    }, function (err, result) {
        if (err) throw err;
        if (result) {
            res.json(result)
        } else {
            res.send(JSON.stringify({
                error: 'Error'
            }))
        }
    })
})

router.put('/update', async (req, res) => {
    const AutoriApi = req.body
    console.log(AutoriApi)
    const response = await AutoriModel.updateOne(AutoriApi);
    console.log(response)
    res.json(response)
})

router.delete('/delete', async (req, res) => {
    const AutoriApi = req.body
    console.log(AutoriApi)
    const response = await AutoriModel.deleteOne(AutoriApi);
    console.log(response)
    res.json(response)
})




module.exports = router;