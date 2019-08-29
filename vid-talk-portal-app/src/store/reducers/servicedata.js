import {
    SERVICE_PAGE_LOADED,
    SERVICE_PAGE_UNLOADED,
    
  } from '../actions/servicedata.actions';
  
  const serviceDataReducer =  (state = {}, action) => {
    switch (action.type) {
      case SERVICE_PAGE_LOADED:
        return {
          ...state,
          services: action.payload
        };
      case SERVICE_PAGE_UNLOADED:
        return {};
      default:
        return state;
    }
  };
  
  export default serviceDataReducer;