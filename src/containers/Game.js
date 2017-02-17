import React, { Component } from 'react';

// import {findById, addPeg, updatePlayer} from '../lib/playerHelpers';
// import {Player} from '../components/Player';
// import logo from '../logo.svg';
// import '../App.css';
import { Scoreboard } from '../components/Scoreboard';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class Game extends Component {

  handleAddStitch = (roundIdx) => {
    this.props.actions.addStitch(roundIdx)
  }

  handleRemoveStitch = (roundIdx) => {
    if ( this.props.rounds[roundIdx].stitches > 0 ) { 
      this.props.actions.removeStitch(roundIdx)
    }
  }

  handleAddPeg = (roundIdx, playerIdx) => {
    // check for crash
    if ( this.props.rounds[roundIdx].scorerOrder.length >= 3 ) {
      const lastScorers = this.props.rounds[roundIdx].scorerOrder.slice(-3)
      let scoreStreak = 1
      for (var i = lastScorers.length - 1; i >= 0; i--) {
        if ( playerIdx == lastScorers[i] ) {
          scoreStreak++
        }
      }
      if ( scoreStreak == 4 ) {
        this.props.actions.endRound(roundIdx, true, playerIdx)
      }
    }

    // check for winner
    if ( this.props.rounds[roundIdx].scores[playerIdx] < 7 ) {
      this.props.actions.addPeg(roundIdx, playerIdx)
    }
    if ( this.props.rounds[roundIdx].scores[playerIdx] === 6 ) {
      this.props.actions.endRound(roundIdx)
    }
  }

  handleRemovePeg = (roundIdx, playerIdx) => {
    if ( this.props.rounds[roundIdx].scores[playerIdx] > 0 ) { 
      this.props.actions.removePeg(roundIdx, playerIdx)
    }
  }

  componentDidMount() {
    this.props.actions.startGame()
  }

  render() {
    return (
      <div className="game">
        <Scoreboard
          gameStarted={this.props.gameStarted}
          stake={this.props.stake}
          players={this.props.players}
          rounds={this.props.rounds}
          onAddPeg={this.handleAddPeg}
          onRemovePeg={this.handleRemovePeg}
          onAddStitch={this.handleAddStitch}
          onRemoveStitch={this.handleRemoveStitch} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameStarted: state.gameStarted,
    stake: state.stake,
    players: state.players,
    rounds: state.rounds
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
