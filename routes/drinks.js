const express = require('express');
const router = express.Router();
const db = require('../config/database');
const drinks = require('../models/SimBar');

// get drink list
router.get('/', (req, res) => 
drinks.findAll()
  .then(drinks => {
    console.log(drinks);
    res.sendStatus(200);
  })
  .catch(err => console.log(err))
);

// add drink list
router.get('/add', (req, res) => {
  const data = {
    drink_name: 'chadonnay',
    drink_cost: 16.00
  }

  let { drink_name, drink_cost } = data;

  // insert into table
  drinks.create({
    drink_name,
    drink_cost
  }) 
  .then(drinks => res.redirect('/drinks'))
  .catch(err => console.log(err));
});

module.exports = router;