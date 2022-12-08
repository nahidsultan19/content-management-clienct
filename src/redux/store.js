import { createStore, applyMiddleware } from 'redux';
import courseReducer from './reducers/courseReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';


const store = createStore(courseReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;