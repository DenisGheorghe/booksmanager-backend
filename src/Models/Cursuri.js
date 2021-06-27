const mongoose = require('mongoose');


const CursuriSchema = new mongoose.Schema({
    Denumire: { type: String, required: true },
    Tip: { type: String, required: true, enum: ["Online", "Fizic"] },
    Limba: { type: String, required: true },
},
    {
        collection: 'Cursuri'
    }
);

const CursuriModel = mongoose.model('CursuriModel', CursuriSchema);
module.exports = CursuriModel;


