import serviceDataReducer from './reducers/servicedata';
import userReducer from './reducers/userdata';
import { combineReducers } from 'redux';

//all reducers
export default combineReducers({
  services: serviceDataReducer,
  users: userReducer
  
});
