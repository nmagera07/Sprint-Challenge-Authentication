const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secrets = require('./secrets')

const Users = require('./auth-model')

router.post('/register', (req, res) => {
  let user = req.body

  const hash = bcrypt.hashSync(user.password)
  user.password = hash

  Users.add(user)
    .then(addedUser => {
      const token = generateToken(user)
      const added = { username: user.username, password: user.password}
      res.status(201).json({ added, token})
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to register user', error})
    })
});

router.post('/login', (req, res) => {
  // implement login
});



function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,

  }

  const options = {
    expiresIn: '1d',
  }

  return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;
