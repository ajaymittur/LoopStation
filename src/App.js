import React from "react"
import PlayAllButton from "./components/PlayAllButton"
import TempoButton from "./components/TempoButton"
import ClearAllButton from "./components/ClearAllButton"
import LoopButton from "./components/LoopButton"
import "./styles/index.css"

export default function App() {
	let loop_button_ids = [1, 2, 3, 4]
	return (
		<div id="wrapper">
			<div id="control-buttons">
				<PlayAllButton />
				<TempoButton />
				<ClearAllButton />
			</div>
			<div id="loop-buttons">
				{loop_button_ids.map(id => (
					<LoopButton id={id} />
				))}
			</div>
		</div>
	)
}
