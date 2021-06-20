const mongoose = require('mongoose');
// mongoose.set('useCreateIndex', true)


const EdituriSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    Nume_Editura: { type: String, required: true },
    Nr_Tel_Editura: { type: String, }
},
    {
        collection: 'Edituri'
    }
);

const EdituriModel = mongoose.model('EdituriModel', EdituriSchema);
module.exports = EdituriModel;


