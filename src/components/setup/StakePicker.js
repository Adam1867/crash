import React from 'react';

export const StakePicker = (props) => {
	return (
		<div className="StakePicker">
			<label>Stake (p)</label>
			<div className={"radio "+(props.stake === 10 ? 'checked' : '')}>
				<label>
					<input type="radio"
						value={10}
						checked={props.stake === 10}
						onChange={props.onStakeChange} />
					10
				</label>
			</div>
			<div className={"radio "+(props.stake === 20 ? 'checked' : '')}>
				<label>
					<input type="radio"
						value={20}
						checked={props.stake === 20}
						onChange={props.onStakeChange} />
					20
				</label>
			</div>
			<div className={"radio "+(props.stake === 30 ? 'checked' : '')}>
				<label>
					<input type="radio"
						value={30}
						checked={props.stake === 30}
						onChange={props.onStakeChange} />
					30
				</label>
			</div>
			<div className={"radio "+(props.stake === 40 ? 'checked' : '')}>
				<label>
					<input type="radio"
						value={40}
						checked={props.stake === 40}
						onChange={props.onStakeChange} />
					40
				</label>
			</div>
			<div className={"radio "+(props.stake === 50 ? 'checked' : '')}>
				<label>
					<input type="radio"
						value={50}
						checked={props.stake === 50}
						onChange={props.onStakeChange} />
					50
				</label>
			</div>
			<div className={"radio "+(props.stake === 100 ? 'checked' : '')}>
				<label>
					<input type="radio"
						value={100}
						checked={props.stake === 100}
						onChange={props.onStakeChange} />
					100
				</label>
			</div>
		</div>
	)
}

StakePicker.propTypes = {
	stake: React.PropTypes.number.isRequired,
	onStakeChange: React.PropTypes.func.isRequired
}