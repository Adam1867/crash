import { START_GAME, END_GAME } from '../actions';

const initialState = false;

export default function game(state = initialState, action) {
	switch (action.type) {
		case START_GAME:
			return true;
		case END_GAME:
			return false;
		default:
	 		return state;
	}
}