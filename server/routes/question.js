import express from 'express'
import moment from 'moment'
moment.locale('es')

const app = express.Router()

const question = {
  idQuestion: '12324',
  title: 'Como representar un array?',
  description: 'Mi prenguta sin respuesta',
  createAt: moment().format('lll'),
  icon: 'devicon-android-plain',
  numberAnswers: 10,
  answers: [],
  user: {
    firstName: 'Ruben',
    surname: 'Acosta',
    email: 'ruben@mail.com',
    password: '1234'
  }
}

const questions = new Array(10).fill(question)

// api/questions
app.get('/', (req, res) => res.status(200).json(questions) )

// api/questions:id
app.get('/:id', (req, res) => res.status(200).json(question))


export default app
