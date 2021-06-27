// Routes for carti endpoint

const express = require('express');
const router = express.Router();

const CartiModel = require('../Models/Carti');

router.post('/create', async (req, res) => {
    const Test = req.body
    console.log(Test)
    const newBook = await CartiModel.create(Test);
    const response = await CartiModel.findOne(newBook).populate("Autor").populate("Cod_Editura")
    console.log(response)
    res.json(response)
})

router.get('/get', async (req, res) => {
    const ListaCarti = await CartiModel
        .find({})
        .populate('Autor')
        .populate('Cod_Editura')

    res.json(ListaCarti)
    console.log('Response => ', ListaCarti)
})

router.post('/update', async (req, res) => {
    const { old: oldItem, new: newItem } = req.body
    const response = await CartiModel.updateOne({
        _id: oldItem
    },
        {
            $set: {
                _id: newItem
            }
        }
    )
    console.log(response)

    res.json({ status: 'ok' })
})

// router.post('/delete', async (req, res) => {
//     const { ISBN } = req.body
//     console.log(ISBN, 'api/delete')
//     const response = await CartiModel.deleteOne({ ISBN })

//     console.log(response, '/api/delete response')
//     res.json({ status: 'ok' })
// })
router.delete('/delete', async (req, res) => {
    const CartiApi = req.body
    console.log(CartiApi)

    const response = await CartiModel.deleteOne(CartiApi);
    console.log(response)
    res.json({ status: 'ok', response })
})
module.exports = router;