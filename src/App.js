// import logo from './logo.svg';
// import './App.css';
import React from 'react';

class App extends React.Component {

    componentDidMount() {
      fetch('http://127.0.0.1:3000/api/v1/accounts/')
      .then(res => res.json())
      .then(data => console.log(data))
    }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }   
}

export default App;
