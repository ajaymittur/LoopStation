import React from "react"
import "../styles/loopButton.css"

class LoopButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			id: this.props.id
		}
	}
	render() {
		return <button type="button" className="loop" />
	}
}

export default LoopButton
