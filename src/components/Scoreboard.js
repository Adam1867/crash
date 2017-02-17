import React from 'react';
import { CostIndicator } from '../components/game/CostIndicator';

export const Scoreboard = (props) => {
	return (
		<div className="scoreBoard">
			<div className="scoreBoardHeader">
				{props.players.map((player, idx) =>
					<div className="player" key={idx}>
						<h5>{player}</h5>
					</div>
				)}
				<div className="stake">
					<label>Stake</label>
					<span>£{parseFloat(props.stake*0.01, 10).toFixed(2)}</span>
				</div>
			</div>
			<div className="rounds">
				{props.rounds.map((round, roundIdx) =>
					<ul key={roundIdx} className="round">
						{props.players.map((player, playerIdx) =>
							<li className="scoreCell" key={playerIdx}>
								{!round.complete
									? <div className="score">
									  	{/*<button className="btn btn-minus" onClick={() => props.onRemovePeg(roundIdx, playerIdx)}>-</button>*/}
									  	<span>{round.scores[playerIdx]}</span>
										<button className="btn btn-plus" onClick={() => props.onAddPeg(roundIdx, playerIdx)}>+</button>
									  </div>
									: <div className="result">
										{round.scores[playerIdx] === 7
											? <div className="winnerIndicator">
												Winner
												{round.crash &&
													<span>Crash</span>
												}
											</div>
											: <CostIndicator stake={props.stake} score={round.scores[playerIdx]} stitches={round.stitches} crash={round.crash}/>
										}
									  </div>
								}
							</li>
						)}
						<li className="stitchCell">
							<label>Stitchers</label>
							<div className="stitchers">
								{/*!round.complete && <button className="btn btn-minus" onClick={() => props.onRemoveStitch(roundIdx)}>-</button>*/}
								<span>{round.stitches}</span>
								{!round.complete && <button className="btn btn-plus" onClick={() => props.onAddStitch(roundIdx)}>+</button>}
							</div>
						</li>
					</ul>
				)}
			</div>
		</div>
	)
}

Scoreboard.propTypes = {
	gameStarted: React.PropTypes.bool.isRequired,
	stake: React.PropTypes.number.isRequired,
	players: React.PropTypes.array.isRequired,
	rounds: React.PropTypes.array.isRequired,
	onAddPeg: React.PropTypes.func.isRequired,
	onRemovePeg: React.PropTypes.func.isRequired,
	onAddStitch: React.PropTypes.func.isRequired,
	onRemoveStitch: React.PropTypes.func.isRequired,
}