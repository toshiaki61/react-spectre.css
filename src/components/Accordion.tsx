import classnames from 'classnames'
import React, {ReactElement} from 'react'

import uniqueId from '../elements/form/uniqueId'
import Icon from '../elements/Icon'
import position from '../utilities/position'
import Menu, {IItemProps as IMenuItemProps} from './Menu'

export interface IItemProps {
  contents: IMenuItemProps[]
  className?: string
  exclusive?: boolean
  useIcon?: boolean
  header: ReactElement<any> | string
}
const Item = ({
  contents,
  className,
  exclusive,
  useIcon,
  header,
}: IItemProps): ReactElement<IItemProps> => {
  const classes = classnames('accordion-item', className)
  const id = uniqueId('accordion-item')
  const type = exclusive ? 'radio' : 'checkbox'
  const inputProps = {id, type, name: `accordion-${type}`}
  const icon = useIcon ? (
    <Icon className={position({marginRight: true})} arrowRight />
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

export interface IAccordionProps {
  menus: IItemProps[]
  className?: string
  exclusive?: boolean
  useIcon?: boolean
}
const Accordion = ({
  menus,
  className,
  exclusive,
  useIcon,
}: IAccordionProps): ReactElement<IAccordionProps> => {
  const classes = classnames('accordion', className)
  return (
    <div className={classes}>
      {menus.map(({header, contents, ...menu}: IItemProps, i: number) => {
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
      })}
    </div>
  )
}
Accordion.defaultProps = {
  className: '',
  exclusive: false,
  useIcon: false,
}

export default Accordion
