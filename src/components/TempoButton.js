import React from "react"
import buttonStyle from "../styles/modules/controlButton.module.css"
import { Sound } from "../modules/Sound"

class TempoButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			style: buttonStyle.normal,
			bpms: [100, 120, 140, 60, 80]
		}
		this.tempoPlayer = new Sound(true)
	}

	handleClick = () => {
		this.setState(currentState => ({
			style:
				currentState.style === buttonStyle.normal
					? buttonStyle.clicked
					: buttonStyle.normal
			// bpms: currentState.bpms
		}))
		if (this.state.style === buttonStyle.normal)
			this.tempoPlayer.play().catch(e => console.log(e.name + ": " + e.message))
		// Reload metronome audio
		else {
			this.tempoPlayer.load()
			this.tempoPlayer.tempo(this.state.bpms[0])
		}
	}

	handleDoubleClick = async () => {
		await this.setState(currentState => {
			currentState.bpms.push(currentState.bpms.shift())
			return {
				style: buttonStyle.normal,
				bpms: currentState.bpms
			}
		})
		this.tempoPlayer.load()
		this.tempoPlayer.tempo(this.state.bpms[0])
	}

	render() {
		return (
			<button
				type="button"
				className={this.state.style}
				onClick={this.handleClick}
				onDoubleClick={this.handleDoubleClick}>
				Tempo
				<p>{this.state.bpms[0]}</p>
			</button>
		)
	}
}

export default TempoButton
