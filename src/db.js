const {connect, model} = require("mongoose");

try{
    connect("mongodb://localhost:27017", {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    console.log("Connected Successfuly");
    const Cat = model('Cat', { name: String , age: Number});
    const kitty = new Cat({ name: 'Zildjian', age: 12 });
    kitty.save().then(() => console.log('meow'));
    
}
catch(error){
    console.log("Error", error);
}
