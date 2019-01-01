import classnames from 'classnames'
import React, {ReactElement, ReactNode} from 'react'

import uniqueId from '../../elements/form/uniqueId'
import {Icon} from '../../elements/Icon'

import position from '../../utilities/position'
import Menu, {IItemProps as IMenuItemProps} from '../Menu'

export interface AccordionItemProps {
  contents: IMenuItemProps[]
  className?: string
  exclusive?: boolean
  useIcon?: boolean
  header: ReactNode
}
const Item = ({
  contents,
  className,
  exclusive,
  useIcon,
  header,
}: AccordionItemProps): ReactElement<AccordionItemProps> => {
  const classes = classnames('accordion-item', className)
  const id = uniqueId('accordion-item')
  const type = exclusive ? 'radio' : 'checkbox'
  const inputProps = {id, type, name: `accordion-${type}`}
  const icon = useIcon ? (
    <Icon className={position({marginRight: true})} type="arrow-right" />
  ) : null
  return (
    <div className={classes}>
      <input {...inputProps} id={id} hidden />
      <label className="accordion-header" htmlFor={id}>
        {icon}
        {header}
      </label>
      <div className="accordion-body">
        <Menu nav contents={contents} />
      </div>
    </div>
  )
}
Item.defaultProps = {
  className: '',
  exclusive: false,
  useIcon: false,
}

export interface AccordionProps {
  menus: AccordionItemProps[]
  className?: string
  exclusive?: boolean
  useIcon?: boolean
}
const Accordion = ({
  menus,
  className,
  exclusive,
  useIcon,
}: AccordionProps): ReactElement<AccordionProps> => {
  const classes = classnames('accordion', className)
  return (
    <div className={classes}>
      {menus.map(
        ({header, contents, ...menu}: AccordionItemProps, i: number) => {
          const key = `accordion_${i}`
          return (
            <Item
              key={key}
              exclusive={exclusive}
              useIcon={useIcon}
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
  exclusive: false,
  useIcon: false,
}

export default Accordion
