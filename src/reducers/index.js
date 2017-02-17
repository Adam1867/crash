import { combineReducers } from 'redux';
import StakeReducer from './stake';
import PlayersReducer from './players';
import GameStartedReducer from './gameStarted';
import RoundsReducer from './rounds';

const rootReducer = combineReducers({
  stake: StakeReducer,
  players: PlayersReducer,
  gameStarted: GameStartedReducer,
  rounds: RoundsReducer
});

export default rootReducer;