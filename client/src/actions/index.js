export default { getquestions, answer, getAnswers }


function getquestions () {
  return function (dispatch) {
    const url = `http://localhost:3000/api/questions`
    const miInit = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    }

    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request getquestions ok')
          return response.json()
        } else { console.log('Error in request getquestions:', response) }
      })
      .then(data => {
        dispatch({ type: 'SET_QUESTIONSLIST', data })
      })
      .catch(err => console.error('Error in response getquestions:', err))
  }
}

function answer (newAnswer) {
  return function (dispatch) {
    dispatch({ type: 'SET_ANSWERS', newAnswer })
    
    // const url = `http://localhost:3000/register`
    // const body = {name, email, password}
    // const miInit = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(body),
    //   mode: 'cors'
    // }

    // return fetch(url, miInit)
    //   .then(response => {
    //     if (response.ok) {
    //       console.log('Request registrar ok')
    //       return response.json()
    //     } else { console.log('Error in request registrar:', response) }
    //   })
    //   .then(data => {
    //     console.log(data)
    //     if (data.validName) {
    //       dispatch({ type: 'SET_NAME', name })
    //       dispatch({ type: 'SET_LOGIN', login: true })
    //     } else {
    //       dispatch({ type: 'SET_VALIDNAME', validName: false })
    //     }
    //   })
    //   .catch(err => console.error('Error in response registrar:', err))
  }
}

function getAnswers (idQuestion, index, user) {
  return function (dispatch) {
    dispatch({ type: 'SET_IDQUESTION', idQuestion })
    dispatch({ type: 'SET_USER', user })
    dispatch({ type: 'SET_INDEXQUESTION', indexQuestion: index })
    
    // const url = `http://localhost:3000/register`
    // const body = {name, email, password}
    // const miInit = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(body),
    //   mode: 'cors'
    // }

    // return fetch(url, miInit)
    //   .then(response => {
    //     if (response.ok) {
    //       console.log('Request registrar ok')
    //       return response.json()
    //     } else { console.log('Error in request registrar:', response) }
    //   })
    //   .then(data => {
    //     console.log(data)
    //     if (data.validName) {
    //       dispatch({ type: 'SET_NAME', name })
    //       dispatch({ type: 'SET_LOGIN', login: true })
    //     } else {
    //       dispatch({ type: 'SET_VALIDNAME', validName: false })
    //     }
    //   })
    //   .catch(err => console.error('Error in response registrar:', err))
  }
}