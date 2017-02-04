import 'babel-polyfill';

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { fetchGenres } from './actions/genres';
import rootReducer from './reducers/index';
import App from './App';
import './css/index.css';

const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

const setupInitialData = () => store.dispatch(fetchGenres());
setupInitialData();
render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
