const { connect } = require("mongoose");
const mongoose = require('mongoose');
const CartiModel = require ('./Models/Carti');


try {
    connect("mongodb://localhost:27017/BooksManager", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Connected Successfuly");


    // const Cat = model('Cat', { name: String, age: Number });
    // const kitty = new Cat({ name: 'Zildjian', age: 12 });
    // kitty.save().then(() => console.log('meow'));
    console.log('Carti require =>', CartiModel);
    console.log('Carti from mongoose =>', mongoose.model('CartiModel'));
}  

catch (error) {
    console.log("Error", error);
}

