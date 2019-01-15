export default { answer }


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