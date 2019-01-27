export default Reducer

function Reducer (state, action) {
  const reducer = ({
    SET_IDQUESTION,
    SET_INDEXQUESTION,
    SET_QUESTIONSLIST,
    SET_NEWQUESTION,
    SET_LOGIN,
    SET_LOGUOT
  })[action.type]

  return (reducer && reducer(state, action)) || state
}


function SET_QUESTIONSLIST (state, action) {
  return { ...state, questionList: action.data }
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

function SET_LOGIN (state, action) {
  return {
    ...state,
    token: action.data.token,
    login: true,
    user: {
      firstName: action.data.firstName,
      surname: action.data.surname,
      email: action.data.email
    }  
  }
}

function SET_LOGUOT (state, action) {
  return {
    ...state,
    token: null,
    login: false,
    user: '',
  }
}