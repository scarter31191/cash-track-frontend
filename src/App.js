import React from 'react';
// import {connect} from 'react-redux';
import AccountsContainer from './containers/AccountsContainer';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import {Route} from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home}/>
        <Route exact path='/' component={About}/>
        <AccountsContainer/>
      </div>
    );
  }   
}

export default App;
