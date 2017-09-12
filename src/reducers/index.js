import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import basketReducer from './BasketReducer/BasketReducer';

export default combineReducers({
  ...basketReducer,
  routing,
});
