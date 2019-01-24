import express from 'express'
import moment from 'moment'
moment.locale('es')

const app = express.Router()

let question = {
  idQuestion: '12324',
  title: 'Como representar un array?',
  description: 'Mi prenguta sin respuesta',
  createAt: moment().format('lll'),
  icon: 'devicon-android-plain',
  answers: [
    {createAt: moment().format('lll'), user: 'ana', description: 'Respuesta 1'},
    {createAt: moment().format('lll'), user: 'pepe', description: 'Respuesta 2'},
    {createAt: moment().format('lll'), user: 'toto', description: 'Respuesta 3'},
    {createAt: moment().format('lll'), user: 'mika', description: 'Respuesta 4'},
    {createAt: moment().format('lll'), user: 'eric', description: 'Respuesta 5'}
  ],
  user: {
    firstName: 'Ruben',
    surname: 'Acosta',
    email: 'ruben@mail.com',
    password: '1234'
  }
}
  
let questions

function fill (question) {  
  questions = new Array(10).fill(question)
}
fill(question)

// api/questions
app.get('/', (req, res) => res.status(200).json(questions) )

// api/questions:id
app.get('/:id', (req, res) => {
    console.log(req.url.split('/')[1])
    res.status(200).json(question)
  }
)

// api/questions/newAnswer
app.post('/newAnswer', (req, res) => {
  const { answer, idQuestion } = req.body
  question.answers.splice(0,0,answer)
  fill(question)
  res.status(200).json({success: true})
})


export default app
