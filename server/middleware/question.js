import moment from 'moment'
moment.locale('es')


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
  
export let questions = new Array(10).fill(question)


export const questionsMiddelware = (req, res, next) => {
  req.questions = questions
  next()
}

export const questionMiddelware = (req, res, next) => {
  const id = req.body.idQuestion
  req.question = questions.find(({idQuestion}) => idQuestion === id)
  next()
}
