import express from 'express'
import jwt from 'jsonwebtoken'
import Debug from 'debug'
import uuidv4 from 'uuid/v4'
import { hashSync } from 'bcrypt'
import { clave } from '../config'
// import { findUserByEmail, users } from '../middleware'
import { User} from '../models'

const debug = new Debug('server:routes:auth')
const app = express.Router()

//  Usando middleware sin base de datos
// app.post('/signin', (req, res, next) => {
//   const { email, password } = req.body.data
//   const user = findUserByEmail(email)
  
//   if (!user) {
//     debug(`User with email ${email} not found`)
//     return res.status(401).json({
//       message: 'Login failed'
//     })
//   }

//   if (!(password === user.password)) {
//     debug(`Password not match.`)
//     return res.status(401).json({
//       message: 'Login failed'
//     })
//   }

//   const token = jwt.sign({ user }, clave, { expiresIn: 86400 })

//   res.status(200).json({
//     message: 'Login success',
//     token,
//     userId: user._id,
//     firstName: user.firstName,
//     surname: user.surname,
//     email: user.email
//   }) 
// })

// app.post('/signup', (req, res) => {
//   const {email, password, firstName, surname } = req.body.user
//   const user = {
//     _id: uuidv4(),
//     email,
//     password,
//     firstName,
//     surname
//   }
//   users.push(user)
//   const token = jwt.sign({ user }, clave, { expiresIn: 86400 })

//   res.status(201).json({
//     message: 'User created',
//     token,
//     userId: user._id,
//     firstName,
//     surname,
//     email    
//   })
// })


// Usando la base de datos
app.post('/signin', async (req, res) => {
  const { email, password } = req.body.data
  const user = await User.findOne({ email })
  
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

app.post('/signup', async (req, res) => {
  const {email, password, firstName, surname } = req.body.user
  const u = new User({
    firstName,
    surname,
    email,
    password: hashSync(password, 10)
  })
  debug(hashSync(password, 10))

  const user = await u.save()
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
