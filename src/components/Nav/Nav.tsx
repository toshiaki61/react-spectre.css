import * as React from 'react'

import cx from 'clsx'

import {NavProps, NavItemProps} from './interfaces'
import {hasNavChildren} from './util'

export const NavItem: React.FC<NavItemProps> = ({
  id,
  name,
  items,
  active,
  onClick,
  className,
}) => {
  const handleItemClick =
    // useCallback(
    (e: React.MouseEvent<any>) => {
      e.preventDefault()
      if (onClick) {
        onClick(e, id)
      }
    }
  // ,[id])
  return (
    <li className={cx('nav-item', className, {active})}>
      <a href="#" onClick={handleItemClick}>
        {name}
      </a>
      {items && items.length ? <Nav items={items} onClick={onClick} /> : null}
    </li>
  )
}
NavItem.defaultProps = {
  active: false,
}

function renderNav(p: NavProps) {
  if (hasNavChildren(p)) {
    return p.children
  }
  const {items, activeId, onClick} = p
  return items.map(item => (
    <NavItem
      key={item.id}
      {...item}
      active={activeId === item.id}
      onClick={onClick}
    />
  ))
}

const Nav: React.FC<NavProps> = p => (
  <ul className={cx('nav', p.className)}>{renderNav(p)}</ul>
)

export default Nav
