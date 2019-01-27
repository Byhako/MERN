import express from 'express'
import moment from 'moment'
moment.locale('es')

import Debug from 'debug'
import  {
  required,
  questionMiddelware,
  questionsMiddelware
} from '../middleware'

const debug = new Debug('server:question')


const app = express.Router()

// api/questions
app.get('/', questionsMiddelware, (req, res) => res.status(200).json(req.questions) )

// api/questions:id
app.get('/:id', questionMiddelware, (req, res) => {
    console.log(req.url.split('/')[1])
    res.status(200).json(question)
  }
)

// api/questions/newAnswer
app.post('/newAnswer', required, questionMiddelware, (req, res) => {
  const { answer, idQuestion } = req.body
  question.answers.splice(0,0,answer)
  fill(question)
  res.status(200).json({success: true})
})

// api/questions
app.post('/', required, (req, res) => {
  questions.splice(0,0,req.body.question)  
  res.status(200).json({success: true})
})


export default app
