import {AccordionChildrenProps, AccordionItemChildrenProps} from './interfaces'

export function hasAccordionChildren(
  item: any
): item is AccordionChildrenProps {
  return item.children
}

export function hasAccordionItemChildren(
  item: any
): item is AccordionItemChildrenProps {
  return item.children
}
