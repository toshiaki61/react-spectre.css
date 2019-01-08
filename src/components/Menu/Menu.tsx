import React, {FC} from 'react'

import cx from 'classnames'

import {MenuProps} from './interfaces'
import {hasMenuChildren} from './util'

import MenuItem from './MenuItem'

function renderMenu(p: MenuProps) {
  if (hasMenuChildren(p)) {
    return p.children
  }
  return p.contents.map((content, i) => (
    <MenuItem
      key={content.id}
      {...content}
      onClick={content.onClick || p.onClick}
    />
  ))
}
const Menu: FC<MenuProps> = p => {
  const {className, nav, onClick, children, ...rest} = p
  const ulProps = Object.keys(rest)
    .filter(r => r !== 'header')
    .reduce((memo, r) => ({...memo, [r]: rest[r]}), {})
  return (
    <ul
      className={cx(
        'menu',
        {
          'menu-nav': nav,
        },
        className
      )}
      {...ulProps}
    >
      {renderMenu(p)}
    </ul>
  )
}

export default Menu
