const mongoose = require('mongoose');


const EdituriSchema = new mongoose.Schema({
    Nume_Editura: { type: String, required: true },
    Nr_Tel_Editura: { type: String, min: 10, max: 13 }
},
    {
        collection: 'Edituri'
    }
);

const EdituriModel = mongoose.model('EdituriModel', EdituriSchema);
module.exports = EdituriModel;


