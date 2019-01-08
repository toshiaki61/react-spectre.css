import React, {FC} from 'react'

import cx from 'classnames'

import {NavProps} from './interfaces'
import {hasNavChildren} from './util'

import NavItem from './NavItem'

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
const Nav: FC<NavProps> = p => (
  <ul className={cx('nav', p.className)}>{renderNav(p)}</ul>
)

export default Nav
