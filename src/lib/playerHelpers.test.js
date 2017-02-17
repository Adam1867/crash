import {findById, addPeg, updatePlayer} from './playerHelpers';

test('addPeg should increase a player score prop by 1', () => {

	const player = {id: 2, name: 'Dave', score: 3}
	const expected = {id: 2, name: 'Dave', score: 4}
	const result = addPeg(player)
	expect(result).toEqual(expected)

})

test('addPeg should not mutate the original player', () => {

	const player = {id: 2, name: 'Dave', score: 3}
	const result = addPeg(player)
	expect(result).not.toBe(player)

})

test('updatePlayer should update a player by id', () => {

	const startPlayers = [
		{id: 1, name: 'Bob', score: 5},
		{id: 2, name: 'Dave', score: 3},
		{id: 3, name: 'Keith', score: 1}
	]
	const updatedPlayer = {id: 2, name: 'Dave', score: 4}
	const expectedPlayers = [
		{id: 1, name: 'Bob', score: 5},
		{id: 2, name: 'Dave', score: 4},
		{id: 3, name: 'Keith', score: 1}
	]
	const result = updatePlayer(startPlayers, updatedPlayer)
	expect(result).toEqual(expectedPlayers)

})

test('updatePlayer should not mutate the original players array', () => {

	const startPlayers = [
		{id: 1, name: 'Bob', score: 5},
		{id: 2, name: 'Dave', score: 3},
		{id: 3, name: 'Keith', score: 1}
	]
	const updatedPlayer = {id: 2, name: 'Dave', score: 4}
	const result = updatePlayer(startPlayers, updatedPlayer)
	expect(result).not.toBe(startPlayers)

})