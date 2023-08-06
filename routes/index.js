const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.post('/new', (req, res, next) => {
  const { messageText, messageUser } = req.body;
  messages.push({ user: messageUser, text: messageText, added: new Date() });
  res.redirect('/');
});

module.exports = router;
