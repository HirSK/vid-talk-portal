import {
    UPDATE_USER
  } from '../actions/user.actions';
  
  const userDataReducer =  (state = {}, action) => {
    switch (action.type) {
      case  UPDATE_USER:
        return {
          ...state,
          usersList: action.payload
        };
      
      default:
        return state;
    }
  };
  
  export default userDataReducer