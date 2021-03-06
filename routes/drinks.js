const express = require('express');
const router = express.Router();
const db = require('../config/database');
const drinks = require('../models/SimBar');

// get drink list
router.get('/', (req, res) => 
drinks.findAll()
  .then(drinks => {
    res.render('drinks', {
      drinks
    });
  })
  .catch(err => console.log(err))
);

// display drinks form options???
router.get('/order', (req, res) => res.render('order'));

// add to tab
router.post('/order', (req, res) => {
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