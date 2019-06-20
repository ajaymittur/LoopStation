import React from "react"
// import PlayAllButton from "./components/PlayAllButton"
// import TempoButton from "./components/TempoButton"
// import ClearAllButton from "./components/ClearAllButton"
import ControlButtons from "./components/ControlButtons"
import LoopButton from "./components/LoopButton"
import "./styles/index.css"

export default function App() {
	let loop_button_ids = [1, 2, 3, 4]
	return (
		<div id="main-wrapper">
			<ControlButtons />
			{/* <div id="control-buttons-wrapper">
				<PlayAllButton />
				<TempoButton />
				<ClearAllButton />
			</div> */}
			<div id="loop-buttons-wrapper">
				{loop_button_ids.map(id => (
					<LoopButton key={id} />
				))}
			</div>
		</div>
	)
}
