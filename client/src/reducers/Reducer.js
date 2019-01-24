export default Reducer

function Reducer (state, action) {
  const reducer = ({
    SET_ANSWERS,
    SET_USER,
    SET_IDQUESTION,
    SET_INDEXQUESTION,
    SET_QUESTIONSLIST,
    SET_ANSWERSLIST
  })[action.type]

  return (reducer && reducer(state, action)) || state
}


function SET_QUESTIONSLIST (state, action) {
  return { ...state, questionList: action.data }
}

function SET_USER(state, action) {
  return { ...state, user: action.user }
}

function SET_IDQUESTION (state, action) {
  return { ...state, idQuestion: action.idQuestion }
}

function SET_INDEXQUESTION (state, action) {
  return { ...state, indexQuestion: action.indexQuestion }
}

function SET_ANSWERS (state, action) {
  let answerList = Object.assign({}, state.answerList)
  const newAnswer = action.newAnswer
  const answer = {
    createAt: newAnswer.createAt,
    user: newAnswer.user,
    description: newAnswer.description
  }

  // si esta pregunta ya tenia alguna respuesta
  if (answerList[newAnswer.idQuestion]) {
    answerList[newAnswer.idQuestion].unshift(answer) 
  } else { // si es la primer respuesta 
    answerList[newAnswer.idQuestion] = [answer]     
  }

  return { ...state, answerList }
}

function SET_ANSWERSLIST (state, action) {
  return { ...state, answerList: action.answerList }
}