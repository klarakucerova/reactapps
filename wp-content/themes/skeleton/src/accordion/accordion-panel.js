function AccordionPanel({content,id, isExpanded}) {

	return(
		<div id={`vs-accordion-panel-${id}`} aria-labelledby={`vs-accordion-button-${id}`}  className={
			isExpanded ? "is-expanded" : ""
		} >
			{content}
		</div>
	)
}

export default AccordionPanel;