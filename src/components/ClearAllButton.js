import React from "react"
import buttonStyle from "../styles/modules/controlButton.module.css"

class ClearAllButton extends React.Component {
	handleClick = () => {
		this.props.handleClick()
	}

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
