const mongoose = require('mongoose');



const AutoriSchema = new mongoose.Schema({
    Nume_Autor: { type: String, required: true },
    Prenume_Autor: { type: String, required: true },
},
    {
        collection: 'Autori'
    }
);

const AutoriModel = mongoose.model('AutoriModel', AutoriSchema);
module.exports = AutoriModel;


