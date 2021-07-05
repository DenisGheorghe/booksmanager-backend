const mongoose = require('mongoose');

const AngajatiSchema = new mongoose.Schema({
    Nume: { type: String, required: true },
    Prenume: { type: String, required: true },
    Nr_Tel: { type: String, required: true, min: 10, max: 13 },
    Email: { type: String },
},
    {
        collection: 'Angajati'
    }
);

const AngajatiModel = mongoose.model('AngajatiModel', AngajatiSchema);
module.exports = AngajatiModel;


