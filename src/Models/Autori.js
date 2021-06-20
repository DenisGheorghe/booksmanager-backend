const mongoose = require('mongoose');
// mongoose.set('useCreateIndex', true)
// unique: true, match: '/^.{0,20}$/'


const AutoriSchema = new mongoose.Schema({
    // _id:{type: String, required: true },
    Nume_Autor: { type: String, required: true },
    Prenume_Autor: { type: String, required: true },
},
    {
        collection: 'Autori'
    }
);

const AutoriModel = mongoose.model('AutoriModel', AutoriSchema);
module.exports = AutoriModel;


