module.exports = (app)=>{
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({test: 'Test'});
});

app.post('/register', (req, res) => {
    res.send({
        message:'User Registered',
       
    })
})

app.get('/data', (req, res) => {
    res.send({message:'hello'})
})
app.post('/data', (req, res) => {
    res.send(req.body)
})



module.exports = router;
}