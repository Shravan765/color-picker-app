import { useState } from 'react'

import './App.css'

function ColorPickerComponent(){
	const [color, setColor] = useState("#ffffff")
	function modifyColor(event){
		setColor(event.target.value)
	}
	return (
		<div id="container" style={ {backgroundColor: color} }>
			<div id="heading">
				<h2>
					Pick a color!
				</h2>
				<p>Click on the colorbox below</p>
				<input type='color' value={color} onChange={modifyColor} id="colorbox">
				</input>
				<p>Selected color: {color}</p>
			</div>
			
		</div>
	)
}

function App() {
	return (
		<>
			<ColorPickerComponent/>
		</>
	)
}

export default App
