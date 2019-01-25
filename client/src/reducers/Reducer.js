export default Reducer

function Reducer (state, action) {
  const reducer = ({
    SET_USER,
    SET_IDQUESTION,
    SET_INDEXQUESTION,
    SET_QUESTIONSLIST,
    SET_NEWQUESTION
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

function SET_NEWQUESTION (state, action) {
  return { ...state, newQuestion: action.newQuestion }
}