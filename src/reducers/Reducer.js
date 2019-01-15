export default Reducer

function Reducer (state, action) {
  const reducer = ({
    IS_OPEN,
    SET_ANSWERS

  })[action.type]

  return (reducer && reducer(state, action)) || state
}

function IS_OPEN (state, action) {
  return { ...state, isOpen: action.isOpen }
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

