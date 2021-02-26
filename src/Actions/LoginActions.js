import { createAction } from 'redux-actions';
import axios from 'axios';

// export const loginMe = createAction('LOGIN');
export  const logoutMe = createAction('LOGOUT');
export const resisterationSucess = createAction('USER_REGISTERED');
export const resisterationFail = createAction('USER_REGISTERATION_FAILED');

export function Login(data) {
    return dispatch => {
      axios.get('http://localhost:4000/users')
        .then((res) => {
          let value = res.data
          var result = value.find(val => val.username===data.username && val.password===data.password)  
          if(result) {
              dispatch(LoginMe(true, data.username))
            }
            else {
              dispatch(LoginMe(false, data.username));
              alert("invalid user name and password");
            }
          })
    }
  } 
  export function LoginMe(isAuthenticated,username) {
    return {
      type: 'LOGIN',
      isAuthenticated,
      username
    }
  }

export function Register(user){
  return dispatch => {
    axios('http://localhost:4000/users/',{
      method: 'POST',
      crossdomain: true,
      data: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        dispatch(resisterationSucess());        
        })
      .catch((error) =>{
        dispatch(resisterationFail());
      })
  }
}

export function UserID(){
  return dispatch =>{
    axios.get('http://localhost:4000/users')
    .then((res)=>{
      var length =res.length;
      return length;
    })
  }
}