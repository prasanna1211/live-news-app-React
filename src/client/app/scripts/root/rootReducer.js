/*
 *  Root Reducer - Include reducers of all modules here
 */
import { combineReducers } from 'redux-immutable';
import layoutModuleReducer from 'scripts/modules/layout/reducers/index.js';

const defaultReducer = () => 'default';

export default combineReducers({
  defaultReducer,
  layoutModuleReducer,
});
