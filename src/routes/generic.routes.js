// Generic routes

const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    res.send({
        message: 'User Registered',
    });
});

router.get('/data', (req, res) => {
    res.send({ message: 'hello' });
});

router.post('/data', (req, res) => {
    res.send(req.body);
});

module.exports = router;