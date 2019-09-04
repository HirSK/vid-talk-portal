import serviceDataReducer from './reducers/service.reducer';
import userReducer from './reducers/user.reducer';
import { combineReducers } from 'redux';

//all reducers
export default combineReducers({
  services: serviceDataReducer,
  users: userReducer
  
});
