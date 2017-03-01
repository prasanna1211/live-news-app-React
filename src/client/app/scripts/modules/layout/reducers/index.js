import { combineReducers } from 'redux-immutable';
import { selectActiveNewsReducer } from './selectActiveNewsReducer.js';

export default combineReducers({
  selectActiveNewsReducer,
});
