import {
    SERVICE_PAGE_LOADED,
    SERVICE_PAGE_UNLOADED,
    
  } from '../actions/servicedata.actions';
  
  const serviceDataReducer =  (state = {}, {type,payload}) => {
    switch (type) {
      case SERVICE_PAGE_LOADED:
        return {
          ...state,
          services: payload
        };
      case SERVICE_PAGE_UNLOADED:
        return {};
      default:
        return state;
    }
  };
  
  export default serviceDataReducer;