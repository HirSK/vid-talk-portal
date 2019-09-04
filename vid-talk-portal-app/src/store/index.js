import {  createStore, applyMiddleware,compose} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk'


const IntialStates = {
    services: {name:'Service1'},
    users : []
}

const middleware = [thunk]

const store = createStore(
    reducer, IntialStates,
    compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())    
   );

console.log(store.getState());

export default store;

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()