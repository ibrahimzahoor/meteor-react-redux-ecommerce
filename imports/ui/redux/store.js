import { createStore , applyMiddleware, compose } from 'redux';
import appReducer from './reducers/index.js';
import createLogger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger();

export const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(logger))
);
