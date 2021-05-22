const express = require("express");
const cors = require("cors");
const routes =require("./routes/routes");
const app = express();
const appPort = 4000;
app.use(express.json());
app.use(cors());
const db = require("./db");


app.get('/users', (req, res) => {
    res.send({
        count: 4,
        users: [
            'Alex',
            'Denis',
            'Ana',
            'Dragos'
        ]
    })
})
require('./routes/routes')(app)



app.listen(appPort, () => {
        console.log(`🚀 App is up and running on port ${appPort}`)

})


