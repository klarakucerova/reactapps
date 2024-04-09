import AccordionHeader from './accordion-header.js'
import AccordionPanel from './accordion-panel.js'

function AccordionItem({accordion, isExpanded, expand}) {

	const {heading, content, id} = accordion;
	return (
		<>
			<AccordionHeader
				expand={expand}
				isExpanded={isExpanded}
				heading={heading}
				id={id}
			/>

            <AccordionPanel content={content} id={id} isExpanded={isExpanded} />
		</>
	)
}
export default AccordionItem;