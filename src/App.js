import React from "react"
import PlayAllButton from "./components/PlayAllButton"
import TempoButton from "./components/TempoButton"
import ClearAllButton from "./components/ClearAllButton"
import LoopButton from "./components/LoopButton"
import "./styles/index.css"

class App extends React.Component {
	constructor() {
		super()
		this.loop_button_ids = [1, 2, 3, 4]
		this.state = {
			shouldPlayAll: false,
			shouldClearAll: false
		}
	}

	playPauseAll = () => {
		this.setState(currentState => ({
			shouldPlayAll: !currentState.shouldPlayAll,
			shouldClearAll: currentState.shouldClearAll
		}))
	}

	clearAll = () => {
		this.setState(currentState => ({
			shouldPlayAll: currentState.shouldPlayAll,
			shouldClearAll: !currentState.shouldClearAll
		}))
	}

	render() {
		return (
			<div id="main-wrapper">
				<div id="control-buttons-wrapper">
					<PlayAllButton handleClick={this.playPauseAll} />
					<TempoButton />
					<ClearAllButton handleClick={this.clearAll} />
				</div>
				<div id="loop-buttons-wrapper">
					{this.loop_button_ids.map(index => (
						<LoopButton
							key={index}
							shouldPlayAll={this.state.shouldPlayAll}
							shouldClearAll={this.state.shouldClearAll}
						/>
					))}
				</div>
			</div>
		)
	}
}

export default App
