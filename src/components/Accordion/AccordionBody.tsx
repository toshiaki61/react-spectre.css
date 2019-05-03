import * as React from 'react'

import {Menu} from '../Menu'

import {AccordionItemProps} from './interfaces'
import {hasAccordionItemChildren} from './util'

const AccordionBody: React.FC<AccordionItemProps> = p => {
  if (hasAccordionItemChildren(p)) {
    return p.children
  }
  return <Menu nav contents={p.contents} />
}

export default AccordionBody
