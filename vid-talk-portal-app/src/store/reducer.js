import servicesList from './reducers/article';

import { routerReducer } from 'react-router-redux';

export default combineReducers({
  servicesList,
  router: routerReducer
});
