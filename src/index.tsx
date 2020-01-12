import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import postListReducer from './reducers/postList'
import httpMiddleware from './middleware/httpMiddleware'

const store = combineReducers({postListReducer})


ReactDOM.render(
  <Provider store={createStore(store, applyMiddleware(httpMiddleware))}><App /></Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
