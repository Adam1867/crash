import React from 'react';

/**
 * <CostIndicator />
 * Calculates and displays the total cost for each loser in the round.
 */
export const CostIndicator = (props) => {
	const gameCost = props.stake
	const scoreCost = (7 - props.score) * props.stake
	const stitchCost = props.stitches * props.stake
	const crashCost = props.crash ? props.stake : 0
	const totalCost = gameCost + scoreCost + stitchCost + crashCost

	return (
		<div className="costIndicator">
			&pound;<span>{parseFloat(totalCost*0.01, 10).toFixed(2)}</span>
		</div>
	)
}

CostIndicator.propTypes = {
	stake: React.PropTypes.number.isRequired,
	score: React.PropTypes.number.isRequired,
	stitches: React.PropTypes.number.isRequired,
	crash: React.PropTypes.bool.isRequired
}