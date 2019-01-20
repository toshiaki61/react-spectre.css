import React, {FC, MouseEvent} from 'react'

import cx from 'classnames'

import {NavItemProps} from './interfaces'

import Nav from './Nav'

const NavItem: FC<NavItemProps> = ({
  id,
  name,
  items,
  active,
  onClick,
  className,
}) => {
  const handleItemClick =
    // useCallback(
    (e: MouseEvent<any>) => {
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

export default NavItem
