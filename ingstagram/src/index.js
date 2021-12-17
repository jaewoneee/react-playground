import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let isDarkMode = false;

function reducer(state = isDarkMode, action) {
  if (action.type === 'true') {
    console.log('hello');
     return !state;
  } else {
    console.log('world');
    return !state;
 }
   
}
let store = createStore(combineReducers({reducer}));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
