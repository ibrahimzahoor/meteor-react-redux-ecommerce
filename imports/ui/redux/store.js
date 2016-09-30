import {  createStore , applyMiddleware } from 'redux';
import { reducer } from './reducers/index.js';
import createLogger from 'redux-logger';

const logger = createLogger();

export const store = createStore (
  reducer,
   applyMiddleware( logger)
);
