import React from "react"
import PlayAllButton from "./controlButtons/PlayAllButton"
import TempoButton from "./controlButtons/TempoButton"
import ClearAllButton from "./controlButtons/ClearAllButton"

class ControlButtons extends React.Component {
	render() {
		return (
			<div id="control-buttons-wrapper">
				<PlayAllButton />
				<TempoButton />
				<ClearAllButton />
			</div>
		)
	}
}

export default ControlButtons
