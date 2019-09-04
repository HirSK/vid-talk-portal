import {
    UPDATE_USER
  } from '../actions/user.actions';
  
  const userDataReducer =  (state = {}, {type,payload}) => {
    switch (type) {
      case  UPDATE_USER:
        return payload       
      
      default:
        return state;
    }
  };
  
  export default userDataReducer