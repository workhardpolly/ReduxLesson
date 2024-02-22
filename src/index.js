import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
// import counterReducer from './reducers/counter';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const store = CreateStore(counterReducer); -only if you have one reducer, f.e. counterReducer

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() - Adds store tracking for add-on in firefox (https://github.com/reduxjs/redux-devtools/tree/main/extension#installation)

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
