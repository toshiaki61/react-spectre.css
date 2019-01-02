import React, {MouseEvent, ReactElement, useCallback} from 'react'

import cx from 'classnames'

import {Button} from '@elements/Button'

import {NavItemProps} from './interfaces'

import Nav from './Nav'

const NavItem = ({
  id,
  name,
  items,
  active,
  onClick,
  className,
}: NavItemProps): ReactElement<NavItemProps> => {
  const handleItemClick = useCallback(
    (e: MouseEvent<any>) => onClick && onClick(e, id),
    [id]
  )
  return (
    <li className={cx('nav-item', className, {active})}>
      <Button href="#" onClick={handleItemClick}>
        {name}
      </Button>
      {items && items.length ? <Nav items={items} onClick={onClick} /> : null}
    </li>
  )
}
NavItem.defaultProps = {
  active: false,
}

export default NavItem
