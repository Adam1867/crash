import React, { Component } from 'react';
import {Link} from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Link to="/setup">Start New Game</Link>
      </div>
    );
  }
}

export default Home;
