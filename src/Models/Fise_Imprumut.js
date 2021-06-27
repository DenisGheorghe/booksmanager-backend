const mongoose = require('mongoose');


const Fisa_ImprumutSchema = new mongoose.Schema({
    _id: { type: String },
    Cod_Lista_Carti: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Cursanti' },
    Cod_Curs: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Curs' },
    Cod_Angajat: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Angajat' },
    Data_Imprumut: { type: Date, default: Date.now },
    Data_Retur: { type: Date, default: Date.now + 14 }
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