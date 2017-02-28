/*
 * Creates a store with root Reducer( extracted from combine reducer)
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'scripts/root/rootSaga.js';
import rootReducer from 'scripts/root/rootReducer.js';
import Immutable from 'immutable';

// Logger for redux actions and actioncreators on console
const reduxLogger = createLogger();
// sagamiddleware to include in the store
const sagaMiddleware = createSagaMiddleware();

/*
 * Single store for the entire app
 * Middleware chain thunk -> reduxLoggers.
 */
const store = createStore(rootReducer, Immutable.Map(), applyMiddleware(sagaMiddleware, thunk, reduxLogger));

console.log(store.getState().toJS());
// start running saga, to watch all actions
sagaMiddleware.run(rootSaga);

export default store;
