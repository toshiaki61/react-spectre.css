// @flow
import React, {ReactElement} from 'react'
import classnames from 'classnames'

import Button from '../elements/Button'
import noop from '../utilities/noop'

export interface ItemProps {
  id: string
  name: string
  onClick?: (e: Event, id: string) => void
  active?: boolean
  items?: Array<ItemProps>
}
const Item = ({
  id,
  name,
  items,
  active,
  onClick,
}: ItemProps): ReactElement<ItemProps> => (
  <li className={classnames('nav-item', {active})}>
    <Button href="#" onClick={e => onClick(e, id)}>
      {name}
    </Button>
    {items && items.length ? <Nav items={items} onClick={onClick} /> : null}
  </li>
)
Item.defaultProps = {
  active: false,
}
export interface NavProps {
  items: Array<ItemProps>
  active?: string
  onClick: (e: Event, id: string) => void
}
const Nav = ({items, active, onClick}: NavProps): ReactElement<NavProps> => (
  <ul className="nav">
    {items.map(item => (
      <Item
        key={item.id}
        {...item}
        active={active === item.id}
        onClick={onClick}
      />
    ))}
  </ul>
)

Nav.defaultProps = {
  active: '',
  onClick: noop,
}
export default Nav
