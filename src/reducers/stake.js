import { UPDATE_STAKE } from '../actions';

const initialState = 20;

export default function stake(state = initialState, action) {
	switch (action.type) {
		case UPDATE_STAKE:
			return action.stake;
		default:
	 		return state;
	}
}