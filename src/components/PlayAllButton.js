import React from "react"
import "../styles/playAllButton.css"

class PlayAllButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<button type="button" className="playall">
				Play All
			</button>
		)
	}
}

export default PlayAllButton
