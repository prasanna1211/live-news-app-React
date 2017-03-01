import { combineReducers } from 'redux-immutable';
import { sourceListReducer } from './sourceListReducer.js';
import { newsReducer } from './newsReducer.js';

export default combineReducers({
  sourceListReducer,
  newsReducer,
});
