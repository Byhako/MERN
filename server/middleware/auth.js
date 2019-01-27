import Debug from 'debug'
import jwt from 'jsonwebtoken'

import { clave } from '../config'

const debug = Debug('server:auth-middelware')

export let users = [
  {
    firstName: 'Ruben',
    surname: 'Acosta',
    email: 'ruben@mail.com',
    password: '1234',
    _id: 123
  }
]

export const findUserByEmail = (e) => users.find(user => user.email === e)

export const required = (req, res, next) => {
  jwt.verify(req.query.token, clave, (err, token) => {
    if (err) res.status(401).json({
      message: 'Unauthorized'
    })

    req.user = token.user
    next()
  })
} 