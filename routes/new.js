const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('form', { title: 'Mini Message Board' });
});

module.exports = router;
