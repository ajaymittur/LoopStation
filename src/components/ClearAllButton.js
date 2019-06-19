import React from "react"

class ClearAllButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<button type="button" className="clearall">
				Clear All
			</button>
		)
	}
}

export default ClearAllButton
