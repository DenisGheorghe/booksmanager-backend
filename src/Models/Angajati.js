const mongoose = require('mongoose');
// mongoose.set('useCreateIndex', true)
// unique: true, match: '/^.{0,20}$/'


const AngajatiSchema = new mongoose.Schema({
    _id:{type: String, required: true },
    Nume: { type: String, required: true },
    Prenume: { type: String, required: true },
    Nr_Tel: { type: String},
    Email: { type: String },
},
    {
        collection: 'Angajati'
    }
);

const AngajatiModel = mongoose.model('AngajatiModel', AngajatiSchema);
module.exports = AngajatiModel;


