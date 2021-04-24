const express = require("express");
const cors = require("cors");

const app = express();
const appPort = 4000;

app.use(cors());

app.get('/users', (req, res) => {
    res.send({
        count: 4,
        users: [
            'Alex',
            'Desnis',
            'Ana',
            'Dragos'
        ]
    })
});

app.listen(appPort, () => {
    console.log(`🚀 App is up and running on port ${appPort}`)
})