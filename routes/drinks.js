const express = require('express');
const router = express.Router();
const db = require('../config/database');
const drinks = require('../models/SimBar');

router.get('/', (req, res) => 
drinks.findAll()
  .then(drinks => {
    console.log(drinks);
    res.sendStatus(200);
  })
  .catch(err => console.log(err))
);

module.exports = router;