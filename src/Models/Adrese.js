const mongoose = require('mongoose');
// mongoose.set('useCreateIndex', true)
// unique: true, match: '/^.{0,20}$/'


const AdreseSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    Strada: { type: String, required: true },
    Numar: { type: String },
    Oras: { type: String, required: true },
    Judet: { type: String, required: true },
    Tara: { type: String, required: true },
    Cod_Cursant: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'CursantiModel' },
},
    {
        collection: 'Adrese'
    }
);

const AdreseModel = mongoose.model('AdreseModel', AdreseSchema);
module.exports = AdreseModel;


