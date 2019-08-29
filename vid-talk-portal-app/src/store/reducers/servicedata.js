import {
    SERVICE_PAGE_LOADED,
    SERVICE_PAGE_UNLOADED,
    
  } from '../constants/actionTypes';
  
  export default (state = {}, action) => {
    switch (action.type) {
      case SERVICE_PAGE_LOADED:
        return {
          ...state,
          services: action.payload[0].services
        };
      case SERVICE_PAGE_UNLOADED:
        return {};
      default:
        return state;
    }
  };
  