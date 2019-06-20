import React from "react"
import buttonStyle from "../../styles/modules/controlButton.module.css"

class ClearAllButton extends React.Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		style: buttonStyle.normal
	// 	}
	// }

	// handleClick = () => {
	// 	this.setState(currentState => ({
	// 		style:
	// 			currentState.style === buttonStyle.normal
	// 				? buttonStyle.clicked
	// 				: buttonStyle.normal
	// 	}))
	// }

	render() {
		return (
			<button
				type="button"
				className={buttonStyle.normal}
				onClick={this.handleClick}>
				Clear All
			</button>
		)
	}
}

export default ClearAllButton
