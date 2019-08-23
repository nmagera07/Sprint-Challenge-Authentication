/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require('jsonwebtoken')
const secrets = require('./secrets')

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (error, decoded) => {
      if (error) {
        res.status(401).json({ you: 'shall not pass!' })
      } else {
        req.user = { username: decoded.username }
        next()
      }
    })
  } else {
    res.status(400).json({ message: 'Please login to view jokes!'})
  }
  
};
