
 const axios = require('axios');
 axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

 const userPostFetch = user => {
    return dispatch => {
        console.log(user);
      return  axios({
        method: 'post',
        url: 'http://localhost:3008/users',
        data: user
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            // Here you should have logic to handle invalid creation of a user.
            // This assumes your Rails API will return a JSON object with a key of
            // 'message' if there is an error with creating the user, i.e. invalid username
            console.log(data);
          } else {
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
          }
        })
    }
  }
  
  const loginUser = userObj => ({
      type: 'LOGIN_USER',
      payload: userObj
  })


export default  userPostFetch;