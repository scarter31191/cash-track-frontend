import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom';
import accountReducer from './reducers/accountReducer'
// import Navbar from './components/Navbar';


import App from './App';

// set up store
// let reducer = ''
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let myStore = createStore(accountReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={myStore}>
      <Router>
        <App />
        {/* <Navbar /> */}
      </Router> 
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
