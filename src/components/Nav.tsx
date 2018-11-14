import classnames from 'classnames'
import React, {MouseEvent, ReactElement} from 'react'

import Button from '../elements/Button'
import noop from '../utilities/noop'

export interface IItemProps {
  id: string
  name: string
  onClick?: (e: MouseEvent<any>, id: string) => void
  active?: boolean
  items?: IItemProps[]
}
const Item = ({
  id,
  name,
  items,
  active,
  onClick,
}: IItemProps): ReactElement<IItemProps> => {
  const handleButtonClick = onClick
    ? (e: MouseEvent<any>) => onClick(e, id)
    : noop
  return (
    <li className={classnames('nav-item', {active})}>
      <Button href="#" onClick={handleButtonClick}>
        {name}
      </Button>
      {items && items.length ? <Nav items={items} onClick={onClick} /> : null}
    </li>
  )
}
Item.defaultProps = {
  active: false,
}
export interface INavProps {
  items: IItemProps[]
  active?: string
  onClick?: (e: MouseEvent<any>, id: string) => void
}
const Nav = ({items, active, onClick}: INavProps): ReactElement<INavProps> => (
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
