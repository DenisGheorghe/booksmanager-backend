const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

const CartiSchema = new mongoose.Schema({
    _id: { type: String, min: 13, max: 13, required: true },
    Denumire_Carte: { type: String },
    Autor: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'AutoriModel' },
    Limba: { type: String },
    Stoc: { type: Number, default: 0 },
    Cod_Editura: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'EdituriModel' }
}, {
    collection: 'Carti'
}
);


const CartiModel = mongoose.model('CartiModel', CartiSchema);
module.exports = CartiModel;



