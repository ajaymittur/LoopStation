import React from "react"
import loopButtonStyle from "../styles/modules/loopButton.module.css"

class LoopButton extends React.Component {
	constructor(props) {
		super(props)
		this.initialModes = ["Record", "Stop", "Play", "Pause"]
		this.state = {
			style: loopButtonStyle.normal,
			modes: [...this.initialModes]
		}
	}

	handleSingleClick = () => {
		this.setState(currentState => {
			// Change previous modes ie. shift them to the left
			// by 1 position in a circular manner
			let newModes
			let currentMode = currentState.modes.shift()
			if (currentMode !== "Pause") {
				// Remove 1st element and add it to the end
				currentState.modes.push(currentMode)
				newModes = currentState.modes
			} else {
				// Remove last element and add it to the beginning
				let prevMode = currentState.modes.pop()
				currentState.modes.unshift(currentMode)
				currentState.modes.unshift(prevMode)
				newModes = currentState.modes
			}

			return {
				id: currentState.id,
				style:
					currentState.style === loopButtonStyle.normal
						? loopButtonStyle.clicked
						: loopButtonStyle.normal,
				modes: newModes
			}
		})
	}

	handleDoubleClick = () => {
		this.setState(currentState => {
			return {
				style: loopButtonStyle.normal,
				modes: [...this.initialModes]
			}
		})
	}

	render() {
		return (
			<button
				type="button"
				className={this.state.style}
				onClick={this.handleSingleClick}
				onDoubleClick={this.handleDoubleClick}>
				{this.state.modes[0]}
			</button>
		)
	}
}

export default LoopButton
