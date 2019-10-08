const express = require('express');
const router = express.Router();
const knexConfig = require('../knexfile.js');
const knex = require('knex');
const db = knex(knexConfig.development);

router.get('/', (req, res) => {
    db('cars')
    .select()
    .then(carsList => {
        res.status(200).json(carsList)
    })
    .catch(err => {
        res.status(500).json({ message: 'There was an error retrieving that list of cars.' })
    })
});


router.post('/', (req, res) => {
    db('cars') // locate our cars table in the db
    .insert(req.body)
    .then(update => {
        res.status(201).json(update)
    })
    .catch(err => {
        res.status(500).json({ message: 'There was an issue creating that car.'})
    })
});


module.exports = router;
