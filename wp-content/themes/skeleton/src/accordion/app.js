// import useState from wordpress/element
import { useState } from "@wordpress/element";

import AccordionItem from "./accordion-item";


function App() {

	const accordions = [
		{
			id: 0,
			heading: "Hello World",
			content: "Lorem ipsum dolor sit amet eu magna phasellus luctus viverra cras rhoncus eiusmod. Blandit adipiscing neque pharetra etiam venenatis dui pulvinar elementum laoreet do eleifend lobortis."
		},
		{
			id: 1,
			heading: "Hello World",
			content: "Lorem ipsum dolor sit amet eu magna phasellus luctus viverra cras rhoncus eiusmod. Blandit adipiscing neque pharetra etiam venenatis dui pulvinar elementum laoreet do eleifend lobortis."
		},
		{
			id: 2,
			heading: "Hello World",
			content: "Lorem ipsum dolor sit amet eu magna phasellus luctus viverra cras rhoncus eiusmod. Blandit adipiscing neque pharetra etiam venenatis dui pulvinar elementum laoreet do eleifend lobortis."
		}
	];

	const [activeId, setActiveId] = useState(null);

	function expand( accordion ){
		// Example 1: Just set the active accordion.
		// setActiveId(accordion.id);

		// Example 2: Toggle the active accordion.
		setActiveId(activeId === accordion.id ? null : accordion.id);

		// Example 3: Toggle the active accordion (verbose edition).
		// if (activeId === accordion.id) {
		// 	setActiveId(null);
		// } else {
		// 	setActiveId(accordion.id);
		// }
	}

	return (
		<>
			{
				accordions.map((accordion) => {
					return <AccordionItem
						accordion={accordion}
						activeId={activeId}
						isExpanded={activeId === accordion.id}
						expand={ () => expand(accordion) }
						key={ accordion.id}
					/>
				})
			}
		</>
	);
}

export default App;