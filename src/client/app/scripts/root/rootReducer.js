/*
 *  Root Reducer
 */
import { combineReducers } from 'redux';

const defaultReducer = () => 'default';

export default combineReducers({
  defaultReducer,
});
