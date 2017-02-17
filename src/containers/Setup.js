import React, { Component } from 'react';
import {Link} from 'react-router';

// import {findById, addPeg, updatePlayer} from '../lib/playerHelpers';

import { StakePicker } from '../components/setup/StakePicker';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class Setup extends Component {

  handleUpdateStake = (e) => {
    const newStake = parseInt(e.target.value, 10)
    this.props.actions.updateStake(newStake)
  }

  handleUpdatePlayerName = (idx, player) => {
    this.props.actions.updatePlayer(idx, player)
  }

  componentDidMount() {
    this.props.actions.endGame()
    this.props.actions.resetGame()
  }

  render() {
    return (
      <div className="setup">
        <h3>Game Setup</h3>
        <StakePicker
          stake={this.props.stake}
          onStakeChange={this.handleUpdateStake} />
        <br />
        <label>Players</label>
        <ul>
          {this.props.players.map((player, idx) =>
            <li key={idx}>
              <input type="text"
                value={player}
                onChange={(e) => this.handleUpdatePlayerName(idx, e.target.value)} />
            </li>
          )}
        </ul>
        <br />
        <button><Link to="/game">Start Game!</Link></button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameStarted: state.gameStarted,
    stake: state.stake,
    players: state.players
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Setup);
