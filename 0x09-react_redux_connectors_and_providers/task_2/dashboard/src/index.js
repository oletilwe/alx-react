import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import uiReducer from './reducers/uiReducer'; // Adjust the path if necessary

// Create a Redux store holding the state of your app with thunk middleware.
const store = createStore(uiReducer, applyMiddleware(thunk));

// Use <Provider> to make the store available to the rest of your app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

