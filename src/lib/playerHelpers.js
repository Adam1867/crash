export const findById = (id, players) => {
	return players.find(player => player.id === id)
}

export const addPeg = (player) => {
	return {
		...player,
		score: player.score + 1
	}
}

export const updatePlayer = (players, updated) => {
	const updatedIndex = players.findIndex(player => player.id === updated.id)
	return [
		...players.slice(0, updatedIndex),
		updated,
		...players.slice(updatedIndex+1)
	]
}