function AccordionHeader({expand, isExpanded, heading, id}) {

	return(
		<h2>
			<button
				id={ `vs-accordion-button-${id}`}
				onClick={expand}
				aria-expanded={isExpanded}
				aria-controls={`vs-accordion-panel-${id}`} >
				{heading}
			</button>
		</h2>
	)
}

export default AccordionHeader;