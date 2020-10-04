import * as React from 'react'

import cx from 'clsx'

import AccordionItem from './AccordionItem'
import {AccordionProps} from './interfaces'
import {hasAccordionChildren} from './util'

function renderAccordion(p: AccordionProps) {
  if (hasAccordionChildren(p)) {
    return p.children
  }
  return p.menus.map(({header, contents, ...menu}, i: number) => {
    const key = `accordion_${i}`
    return (
      <AccordionItem key={key} header={header} contents={contents} {...menu} />
    )
  })
}
const Accordion: React.FC<AccordionProps> = p => (
  <div className={cx('accordion', p.className)}>{renderAccordion(p)}</div>
)

export default Accordion
