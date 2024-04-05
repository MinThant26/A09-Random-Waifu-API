const express = require('express');
const waifus = require('../models/waifus');

const router = express.Router();

router.get('/', (req,res) => {
    res.send(waifus.all());
});

router.get('/random', (req,res) => {
    res.send(waifus.random());
});

module.exports = router;