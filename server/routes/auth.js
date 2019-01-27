import express from 'express'
import Debug from 'debug'
import jwt from 'jsonwebtoken'
import uuidv4 from 'uuid/v4'

const debug = Debug('server:auth')
const app = express.Router()
const clave = 'miclave'

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
  const { email, password } = req.body.data
  const user = findUserByEmail(email)
  
  if (!user) {
    debug(`User with email ${email} not found`)
    return res.status(401).json({
      message: 'Login failed'
    })
  }

  if (!(password === user.password)) {
    debug(`Password not match.`)
    return res.status(401).json({
      message: 'Login failed'
    })
  }

  const token = jwt.sign({ user }, clave, { expiresIn: 86400 })

  res.status(200).json({
    message: 'Login success',
    token,
    userId: user._id,
    firstName: user.firstName,
    surname: user.surname,
    email: user.email
  }) 
})


app.post('/signup', (req, res) => {
  const {email, password, firstName, surname } = req.body.user
  const user = {
    _id: uuidv4(),
    email,
    password,
    firstName,
    surname
  }
  users.push(user)
  const token = jwt.sign({ user }, clave, { expiresIn: 86400 })

  res.status(201).json({
    message: 'User created',
    token,
    userId: user._id,
    firstName,
    surname,
    email    
  })

})

export default app
