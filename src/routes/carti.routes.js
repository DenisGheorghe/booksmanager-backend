// Routes for carti endpoint

const express = require("express");
const router = express.Router();
const Logger = require("../logger");
var cors = require("cors");

const CartiModel = require("../Models/Carti");

router.post("/create", async (req, res) => {
  const Test = req.body;
  console.log(Test);
  const newBook = await CartiModel.create(Test);
  const response = await CartiModel.findOne(newBook)
    .populate("Autor")
    .populate("Cod_Editura");
  console.log(response);
  res.json(response);
});

router.get("/get", async (req, res) => {
  const ListaCarti = await CartiModel.find({})
    .populate("Autor")
    .populate("Cod_Editura");

  res.json(ListaCarti);
  console.log("Response => ", ListaCarti);
});

// router.get('/get/:query', cors(), function (req, res) {
//     var query = req.params.query;
//     CartiModel.find({
//         'Limba': query
//     }, function (err, result) {
//         if (err) throw err;
//         if (result) {
//             res.json(result)
//         } else {
//             res.send(JSON.stringify({
//                 error: 'Error'
//             }))
//         }
//     })
// })

router.get("/get/language/:query", cors(), async (req, res) => {
  var query = req.params.query;
  const response = await CartiModel.find({ Limba: query })
    .populate("Autor")
    .populate("Cod_Editura");
  console.log(response);
  res.json(response);
});

// router.get('/get/:id', async (req, res) => {
//     const ListaQuerryCarti = await CartiModel
//         .findById(req.params.id).then(cartiFoundAuth => {
//             if (!cartiFoundAuth) { return res.status(404).end(); }
//             return res.status(200).json(cartiFoundAuth);
//         })
//         .catch(err => next(err));

//     res.json(ListaQuerryCarti)
//     console.log('Response => ', ListaQuerryCarti)
// })

router.get("/get/author/:query", async (req, res) => {
  var query = req.params.query;

  let response = await CartiModel.find({})
    .populate("Autor")
    .populate("Cod_Editura");
  response = response.filter(
    (carte) =>
      (carte.Autor && carte.Autor.Nume_Autor == query) ||
      carte.Autor.Prenume_Autor == query
  );
  console.log(response);
  res.json(response);
});

router.put("/update", async (req, res) => {
  const cartiUpdate = req.body.data;
  Logger.debug(JSON.stringify(cartiUpdate));
  const updateResultawait = await CartiModel.updateOne(
    { _id: cartiUpdate.id },
    cartiUpdate
  );
  console.log(updateResultawait);
  const response = await CartiModel.findOne({ _id: cartiUpdate.id })
    .populate("Autor")
    .populate("Cod_Editura");
  // Logger.debug(response)
  res.json(response);
});

router.delete("/delete", async (req, res) => {
  const CartiApi = req.body;
  console.log(`Id-ul cartii este: ${CartiApi._id}`);
  const response = await CartiModel.deleteOne(CartiApi);
  res.json({ status: "ok", response });
});

module.exports = router;
