// STAKE ACTIONS
export const UPDATE_STAKE = 'UPDATE_STAKE';
export function updateStake(stake) {
	return {
		type: UPDATE_STAKE,
		stake
	}
}

// PLAYER ACTIONS
export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export function updatePlayer(idx, player) {
	return {
		type: UPDATE_PLAYER,
		idx,
		player
	}
}

// GAME ACTIONS
export const START_GAME = 'START_GAME';
export const END_GAME = 'END_GAME';
export const RESET_GAME = 'RESET_GAME';
export function startGame() {
	return {
		type: START_GAME
	}
}
export function endGame() {
	return {
		type: END_GAME
	}
}
export function resetGame() {
	return {
		type: RESET_GAME
	}
}

// ROUND ACTIONS
export const ADD_PEG = 'ADD_PEG';
export const REMOVE_PEG = 'REMOVE_PEG';
export const ADD_STITCH = 'ADD_STITCH';
export const REMOVE_STITCH = 'REMOVE_STITCH';
export const END_ROUND = 'END_ROUND';
export function addPeg(roundIdx, playerIdx) {
	return {
		type: ADD_PEG,
		round: roundIdx,
		player: playerIdx
	}
}
export function removePeg(roundIdx, playerIdx) {
	return {
		type: REMOVE_PEG,
		round: roundIdx,
		player: playerIdx
	}
}
export function addStitch(roundIdx) {
	return {
		type: ADD_STITCH,
		round: roundIdx
	}
}
export function removeStitch(roundIdx) {
	return {
		type: REMOVE_STITCH,
		round: roundIdx
	}
}
export function endRound(roundIdx, crash=false, player) {
	return {
		type: END_ROUND,
		round: roundIdx,
		crash: crash,
		player: player
	}
}