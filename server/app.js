import express from 'express'
import { question } from './routes'

const app = express()

// import cors from 'cors'
// const corsOptions = { origin: "http://localhost:5000" }
// app.use(cors(corsOptions))

// si estoy en entorno de desarrollo
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')  // cualquier dominio
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, PUT, DELETE, OPTIONS')
    next()
  })
}


app.use('/api/questions', question)

export default app
