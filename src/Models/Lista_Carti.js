const mongoose = require('mongoose');
// mongoose.set('useCreateIndex', true)
// unique: true, match: '/^.{0,20}$/'


const Lista_CartiSchema = new mongoose.Schema({
    _id:{type: String, required: true},
    Cod_Cursant: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'CursantiModel'},
    Cod_Carte: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'CartiModel' },
},
    {
        collection: 'Autori'
    }
);

const Lista_CartiModel = mongoose.model('Lista_CartiModel', Lista_CartiSchema);
module.exports = Lista_CartiModel;


