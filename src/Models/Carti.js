const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)
// unique: true, match: '/^.{0,20}$/'
const CartiSchema = new mongoose.Schema({
    _id: { type: String, min: 13, max: 13, required: true },
    Denumire_Carte: { type: String },
    Autor: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'AutoriModel' },
    Limba: { type: String },
    Stoc: { type: Number, default: 0 },
    Cod_Editura: { type: Number }
}, {
    collection: 'Carti'
}
);


const CartiModel = mongoose.model('CartiModel', CartiSchema);
module.exports = CartiModel;



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