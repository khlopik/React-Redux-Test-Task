import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '@/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

// if (process.env.NODE_ENV === 'production') {
//   module.exports = require('./configureStore.prod');
// } else {
//   module.exports = require('./configureStore.dev');
// }

const initialState = {};

export default createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, createLogger())),
);
