import React, {SFC} from 'react'

import {Menu} from '@components/Menu'

import {AccordionItemProps} from './interfaces'
import {hasAccordionItemChildren} from './util'

const AccordionBody: SFC<AccordionItemProps> = p => {
  if (hasAccordionItemChildren(p)) {
    return p.children
  }
  return <Menu nav contents={p.contents} />
}

export default AccordionBody
