import React, {ReactElement} from 'react'

import cx from 'classnames'

import AccordionItem from './AccordionItem'
import {AccordionItemProps, AccordionProps} from './interfaces'

const Accordion = ({
  menus,
  className,
  children,
}: AccordionProps): ReactElement<AccordionProps> => {
  const classes = cx('accordion', className)
  return (
    <div className={classes}>
      {children
        ? children
        : menus &&
          menus.map(
            ({header, contents, ...menu}: AccordionItemProps, i: number) => {
              const key = `accordion_${i}`
              return (
                <AccordionItem
                  key={key}
                  header={header}
                  contents={contents}
                  {...menu}
                />
              )
            }
          )}
    </div>
  )
}
Accordion.defaultProps = {
  className: '',
}

export default Accordion
