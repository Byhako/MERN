import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import Reducer from '../reducers/Reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const logger = createLogger()
const middleware = [ReduxThunk, logger]

export const initialState = {
  token: null,
  login: false,
  user: 'Toto',
  idQuestion: '',
  indexQuestion: '',
  answerList: {},
  questionList: [{
      idQuestion: '12324',
      user: 'Ruben',
      title: 'Nueva pregunta Android.',
      description: 'No se como hacer un header en mi movil',
      createAt: 'hace unos segundos',
      icon: 'devicon-android-plain'
    },
    {
      idQuestion: '6789',
      user: 'Nata',
      title: 'Pregunta sin definir',
      description: 'No se como hacer un header en mi movil',
      createAt: 'hace unos segundos',
      icon: null
    }]
}

const store = createStore(
  Reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store