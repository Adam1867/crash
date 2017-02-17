import React from 'react';

export const Player = (props) => {
	return (
		<li className="player">
			<span className="playerName">{props.player.name}</span>
			{props.gameInProgress ?
				<div className="playerScore">{props.player.score} 
					<button onClick={() => props.handleAddPeg(props.player.id)}>+</button>
				</div>
			:
				<div className="result">
					<div>scored: {props.player.score}</div>
					<div>{props.isWinner ?
						<span>Winner!!!</span>
					:
						<span>{(7 - props.player.score) * props.gameStake + props.gameStake}p</span>
					}</div>
				</div>
			}
		</li>
	)
}

Player.propTypes = {
	player: React.PropTypes.object.isRequired,
	gameInProgress: React.PropTypes.bool.isRequired,
	gameStake: React.PropTypes.number.isRequired,
	handleAddPeg: React.PropTypes.func.isRequired,
	isWinner: React.PropTypes.bool.isRequired
}