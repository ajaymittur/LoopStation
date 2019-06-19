import React from "react"
import "../styles/tempoButton.css"

class TempoButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<button type="button" className="tempo">
				Tempo
			</button>
		)
	}
}

export default TempoButton
