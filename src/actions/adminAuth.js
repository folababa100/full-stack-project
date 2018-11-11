import axios from 'axios';

export const loginAdminUser = ((object, callback) => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN_ADMIN_USER' });

    axios.post('http://localhost:4000/adminuser', object)
      .then((res) => {
        
      })
      .catch((e) => {

      })
  }
})
