import React, {ReactElement} from 'react'

import cx from 'classnames'

import {NavProps} from './interfaces'

import NavItem from './NavItem'

const Nav = ({
  children,
  items,
  active,
  onClick,
  className,
}: NavProps): ReactElement<NavProps> => (
  <ul className={cx('nav', className)}>
    {children
      ? children
      : items &&
        items.map(item => (
          <NavItem
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
}

export default Nav
