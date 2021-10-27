import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import './assets/stylesheets/application.css';
const initialState = {
  pays: []
};

const middlewares = applyMiddleware(promise, logger);
const store = createStore(reducers, initialState, middlewares);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
