import React from 'react';
import {connect} from 'react-redux';
import {fetchAccounts} from './actions/fetchAccounts'
import AccountsContainer from './containers/AccountsContainer';
import Navbar from './components/Navbar';
import Home from './components/Home'
// import About from './components/About'
import {Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends React.Component {

  componentDidMount() {
    this.props.fetchAccounts()
}

  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home}/>
        <AccountsContainer accounts={this.props.accounts}/>
        {/* <Route exact path='/accounts' component={About}/> */}
      </div>
    );
  }   
}

const mapStateToProps = state => {
  return{
      accounts: state.accounts
  }
}

export default connect(mapStateToProps, {fetchAccounts})(App);
