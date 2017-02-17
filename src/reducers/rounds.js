import { ADD_PEG, REMOVE_PEG, ADD_STITCH, REMOVE_STITCH, END_ROUND, RESET_GAME } from '../actions';

const initialState = [
	{
      complete: false,
      scores: [
        0,
        0,
        0,
        0
      ],
      scorerOrder: [],
      stitches: 0,
      crash: false
    }
];

export default function rounds(state = initialState, action) {
	let newState = [];
	switch (action.type) {
		case ADD_PEG: 
			newState = [...state]
			newState[action.round] = {
				...newState[action.round],
				scores: [
					...newState[action.round].scores.slice(0, action.player),
					newState[action.round].scores[action.player] + 1,
					...newState[action.round].scores.slice(action.player+1)
				],
				scorerOrder: [...newState[action.round].scorerOrder, action.player]
			}
			return newState;
		case REMOVE_PEG:
			newState = [...state]
			newState[action.round] = {
				...newState[action.round],
				scores: [
					...newState[action.round].scores.slice(0, action.player),
					newState[action.round].scores[action.player] - 1,
					...newState[action.round].scores.slice(action.player+1)
				]
			}
			return newState;
		case ADD_STITCH: 
			newState = [...state]
			newState[action.round] = {
				...newState[action.round],
				stitches: newState[action.round].stitches + 1
			}
			return newState;
		case REMOVE_STITCH:
			newState = [...state]
			newState[action.round] = {
				...newState[action.round],
				stitches: newState[action.round].stitches - 1
			}
			return newState;
		case END_ROUND:
			newState = [...state]
			if ( action.crash && action.player ) {
				newState[action.round] = {
					...newState[action.round],
					complete: true,
					crash: action.crash,
					scores: [
						...newState[action.round].scores.slice(0, action.player),
						newState[action.round].scores[action.player] = 7,
						...newState[action.round].scores.slice(action.player+1)
					],
				}
			} else {
				newState[action.round] = {
					...newState[action.round],
					complete: true,
					crash: action.crash
				}
			}
			newState.push(initialState[0]);
			return newState;
		case RESET_GAME:
			return initialState;
		default:
	 		return state;
	}
}