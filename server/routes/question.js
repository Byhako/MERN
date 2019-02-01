import express from 'express'
import moment from 'moment'
moment.locale('es')

import Debug from 'debug'
import  { required} from '../middleware'
  // questionMiddelware,
  // questionsMiddelware,
  // questions
import { question } from '../db-api'
import { handleError } from '../utils'

const debug = new Debug('server:question')
const app = express.Router()

// api/questions
// app.get('/', questionsMiddelware, (req, res) => {
//   res.status(200).json(req.questions) 
// })
app.get('/', async (req, res) => {
  try {
    const questions = await question.findAll()
    res.status(200).json(questions) 
  } catch (err) {
    handleError(err, res)
  }
})

// api/questions:id
// app.get('/:id', questionMiddelware, (req, res) => {
//     console.log(req.url.split('/')[1])
//     res.status(200).json(question)
//   }
// )
app.get('/:id', async (req, res) => {
    tyr {
      console.log(req.url.split('/')[1])
      cont q = await question.findById(req.url.split('/')[1])
      res.status(200).json(q)
    } catch (err) {
      handleError(err, res)
    }
  }
)

// api/questions/newAnswer
// app.post('/newAnswer', required, questionMiddelware, (req, res) => {
//   const { answer, idQuestion } = req.body
//   req.question.answers.splice(0,0,answer)
//   res.status(200).json({success: true})
// })
app.post('/newAnswer', required, (req, res) => {
  const { answer, idQuestion } = req.body
  req.question.answers.splice(0,0,answer)
  res.status(200).json({success: true})
})

// api/questions
// app.post('/', required, questionsMiddelware, (req, res) => {
//   req.questions.splice(0,0,req.body.question)  
//   res.status(200).json({success: true})
// })
app.post('/', required, (req, res) => {
  req.questions.splice(0,0,req.body.question)  
  res.status(200).json({success: true})
})

export default app
