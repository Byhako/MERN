export default { getquestions, setNewAnswer, newQuestion, login, signup }


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


function setNewAnswer (answer, idQuestion) {
  return function (dispatch) {
    
    const url = `http://localhost:3000/api/questions/newAnswer`
    const body = {answer, idQuestion}
    const miInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request setNewAnswer ok')
          return response.json()
        } else { console.log('Error in request setNewAnswer:', response) }
      })
      .then(data => {
        if (data.success) {
          dispatch(getquestions())
        }
        
      })
      .catch(err => console.error('Error in response setNewAnswer:', err))
  }
}


function newQuestion (question) {
  return function (dispatch) {
    
    const url = `http://localhost:3000/api/questions`
    const body = {question}
    const miInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request newQuestion ok')
          return response.json()
        } else { console.log('Error in request newQuestion:', response) }
      })
      .then(data => {
        if (data.success) {
          dispatch({ type: 'SET_NEWQUESTION', newQuestion: true })
        }
      })
      .catch(err => console.error('Error in response newQuestion:', err))
  }
}

function login (data) {
  return function (dispatch) {
    
    const url = `http://localhost:3000/api/auth/signin`
    const body = {data}
    const miInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request login ok')
          return response.json()
        } else { console.log('Error in request login:', response) }
      })
      .then(data => {
        if (data.message === 'Login success') {
          dispatch({ type: 'SET_LOGIN', data })
        }
      })
      .catch(err => console.error('Error in response login:', err))
  }
}

function signup (user) {
  return function (dispatch) {
    
    const url = `http://localhost:3000/api/auth/signup`
    const body = {user}
    const miInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      mode: 'cors'
    }
    return fetch(url, miInit)
      .then(response => {
        if (response.ok) {
          console.log('Request signup ok')
          return response.json()
        } else { console.log('Error in request signup:', response) }
      })
      .then(data => {
        if (data.message === 'User created') {
          dispatch({ type: 'SET_LOGIN', data })
        }
      })
      .catch(err => console.error('Error in response signup:', err))
  }
}