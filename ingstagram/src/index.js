import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';



function isDarkMode(state = null, action) {
  state = getCurrentMode(state);
  if (action.type === 'dark') {
     localStorage.setItem('mode', 'dark');
    return state = true;
  } else if(action.type === 'light'){
    localStorage.setItem('mode', 'light');
    return state = false;
  }
  return state;
}

// 로컬스토리지에 저장된 mode 상태 체크
function getCurrentMode(state = null) {
  let current = localStorage.getItem('mode');
    if (current === 'dark') {
      return state = true;
    } else {
      return state = false;
    }
}


let store = createStore(combineReducers({isDarkMode}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
