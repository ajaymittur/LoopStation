import React from "react"
import buttonStyle from "../styles/modules/controlButton.module.css"

class PlayAllButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			style: buttonStyle.normal,
			mode: "Play All"
		}
	}

	handleClick = () => {
		this.props.handleClick()
		this.setState(currentState => ({
			style:
				currentState.style === buttonStyle.normal
					? buttonStyle.clicked
					: buttonStyle.normal,
			mode: currentState.mode === "Play All" ? "Pause All" : "Play All"
		}))
	}

	render() {
		return (
			<button
				type="button"
				className={this.state.style}
				onClick={this.handleClick}>
				{this.state.mode}
			</button>
		)
	}
}

export default PlayAllButton
