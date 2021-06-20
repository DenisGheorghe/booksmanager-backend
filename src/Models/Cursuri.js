const mongoose = require('mongoose');
// mongoose.set('useCreateIndex', true)
// unique: true, match: '/^.{0,20}$/'


const CursuriSchema = new mongoose.Schema({
    _id:{type: String, required: true },
    Denumire: { type: String, required: true },
    Tip: { type: String, required: true },
    Limba: { type: String, required: true },
},
    {
        collection: 'Cursuri'
    }
);

const CursuriModel = mongoose.model('CursuriModel', CursuriSchema);
module.exports = CursuriModel;


