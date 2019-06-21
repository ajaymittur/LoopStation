import React from "react"
import buttonStyle from "../styles/modules/controlButton.module.css"

class TempoButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			style: buttonStyle.normal
		}
	}

	handleClick = () => {
		this.setState(currentState => ({
			style:
				currentState.style === buttonStyle.normal
					? buttonStyle.clicked
					: buttonStyle.normal
		}))
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
