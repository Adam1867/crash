import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <Link to="/setup" className="btn">New Game</Link>
        </div>
          {this.props.children}
      </div>
    );
  }
}

export default App;
