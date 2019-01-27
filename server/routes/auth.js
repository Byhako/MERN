import express from 'express'
import Debug from 'debug'

const debug = Debug('server:auth')
const app = express.Router()


let users = [
  {
    firstName: 'Ruben',
    surname: 'Acosta',
    email: 'ruben@mail.com',
    password: '1234',
    _id: 123
  }
]

const findUserByEmail = (e) => users.find(user => user.email === e)


app.post('/signin', (req, res, next) => {
  const { email, password } = req.body
  const user = findUserByEmail(email)
  
  if (!user) {
    debug(`User with email ${email} not found`)
    return res.status(401).json({
      message: 'Login failed'
    })
  }

  if (password === user.password) {


  } else {
    debug(`Password not match.`)
    return res.status(401).json({
      message: 'Login failed'
    })
  }
})

export default app
