const mongoose = require('mongoose');
var moment = require('moment');
var now = moment();

const Fisa_ImprumutSchema = new mongoose.Schema({
    // _id: { type: String },
    // Cod_Lista_Carti: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Cursanti' },
    Carti: [{
        Cod_Carte: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'CartiModel' },
    }],
    Cod_Cursant: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'CursantiModel' },
    //  Cod_Curs: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'CursuriModel' },
    Cod_Angajat: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'AngajatiModel' },
    Data_Imprumut: { type: String, },
    Data_Retur: { type: String },
    Returnat: { type: Boolean, default: false }
    // Data_Imprumut: { type: Date, default: Date.now() },
    // Data_Retur: { type: Date, default: Date.now() + 14 * 24 * 60 * 60 * 1000 },
},
    {
        collection: 'Fisa_Imprumut'
    }
);

const Fisa_ImprumutModel = mongoose.model('Fisa_ImprumutModel', Fisa_ImprumutSchema);
module.exports = Fisa_ImprumutModel;


// Fisa_ImprumutSchema.pre('save', beforeSave);
// Fisa_ImprumutSchema.pre('delete', beforeDelete);
// Fisa_ImprumutSchema.pre('remove', () => {

// });

// const beforeSave = (x) => {
//     console.log('I did this beforeSave', x)
// }

// function beforeSave(x) {
//     console.log('I did this beforeSave', x)
// }

// function beforeDelete() {
//     // ...
// }