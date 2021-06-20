const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)
// unique: true, match: '/^.{0,20}$/'
const CursantiSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    Nume: { type: String, required: true },
    Prenume: { type: String, required: true },
    CNP: { type: Number, Min: 13, Max: 13, required: true },
    Nr_Tel: { type: String },
    Email: { type: Number, required: true },
    Cod_Adresa: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'AdresaModel' },
    Cod_Curs: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'CursuriModel'},
    Voluntar: {type: Boolean},

}, {
    collection: 'Cursanti'
}
);


const CursantiModel = mongoose.model('CursantiModel', CursantiSchema);
module.exports = CursantiModel;



// const Carti = model("Carti", {
//     ISBN: String,
//     Denumire_Carte: String,
//     Cod_Autor: String,
//     Domeniu: String,
//     Stoc: Number,
//     Cod_Editura: Number
// });
// const carte = new Carti({
//     ISBN: 'Test',
//     Denumire_Carte: 'Test',
//     Cod_Autor: '123',
//     Domeniu: 'Test',
//     Stoc: 12,
//     Cod_Editura: 123
// })
// carte.save().then(() => console.log('Test'));