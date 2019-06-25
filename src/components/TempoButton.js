import React from "react"
import buttonStyle from "../styles/modules/controlButton.module.css"
import { Sound } from "../modules/Sound"

class TempoButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			style: buttonStyle.normal
		}
		this.tempoPlayer = new Sound(true)
	}

	handleClick = () => {
		this.setState(currentState => ({
			style:
				currentState.style === buttonStyle.normal
					? buttonStyle.clicked
					: buttonStyle.normal
		}))
		if (this.state.style === buttonStyle.normal)
			this.tempoPlayer.play().catch(e => console.log(e.name + ": " + e.message))
		else this.tempoPlayer.load()
	}

	render() {
		return (
			<button
				type="button"
				className={this.state.style}
				onClick={this.handleClick}>
				Tempo
			</button>
		)
	}
}

export default TempoButton
