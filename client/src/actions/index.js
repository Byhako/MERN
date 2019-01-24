export default { getquestions, setNewAnswer }


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
          console.log('Request registrar ok')
          return response.json()
        } else { console.log('Error in request registrar:', response) }
      })
      .then(data => {
        console.log(data)
        if (data.success) {
          dispatch(getquestions())
        }
        
      })
      .catch(err => console.error('Error in response registrar:', err))
  }
}