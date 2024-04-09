// import useState from wordpress/element
import { useState } from "@wordpress/element";

import { accordion } from './data.js';

function App() {
	const listItems = accordion.map(item =>
		<li key={item.id}>
			<h3 className='heading'>{item.heading}</h3>
			<div>{item.content}</div>
		</li>
	);
	return <ul>{listItems}</ul>;
}
export default App;