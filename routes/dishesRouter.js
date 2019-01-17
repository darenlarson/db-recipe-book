const express = require('express');

const router = express.Router();

const db = require('../data/helpers/helpers.js');

router.get('/', (req, res) => {

    db.getDishes()
        .then(dishes => {
            res.status(200).json(dishes);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});