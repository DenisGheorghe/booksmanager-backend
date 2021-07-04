const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

const CursantiSchema = new mongoose.Schema({
    Nume: { type: String, required: true },
    Prenume: { type: String, required: true },
    CNP: { type: Number, Min: 13, Max: 13, required: true },
    Nr_Tel: { type: String, Min: 10, Max: 13, required: true },
    Email: { type: String, required: true },
    StradaSiNumar: { type: String, required: true },
    Oras: { type: String, required: true },
    Judet: { type: String, required: true },
    Tara: { type: String, required: true },
    Cod_Curs: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'CursuriModel' },
    Voluntar: { type: Boolean },
}, {
    collection: 'Cursanti'
}
);


const CursantiModel = mongoose.model('CursantiModel', CursantiSchema);
module.exports = CursantiModel;


