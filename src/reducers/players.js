import { UPDATE_PLAYER } from '../actions';

const initialState = [
	'Fred',
	'Paul',
	'Adam',
	'Darby'
];

export default function players(state = initialState, action) {
	switch (action.type) {
		case UPDATE_PLAYER:
			const newState = [...state]
			newState[action.idx] = action.player
			return newState;
		default:
	 		return state;
	}
}