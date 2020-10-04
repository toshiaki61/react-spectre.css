import * as React from 'react'

import cx from 'clsx'

import {MenuProps, MenuAttrProps} from './interfaces'
import {hasMenuChildren} from './util'

import MenuItem from './MenuItem'

function renderMenu(p: MenuProps) {
  if (hasMenuChildren(p)) {
    return p.children
  }
  return p.contents.map(content => (
    <MenuItem
      key={content.id}
      {...content}
      onClick={content.onClick || p.onClick}
    />
  ))
}
const Menu: React.FC<MenuProps> = p => {
  const {className, nav, onClick, children, ...rest} = p
  const ulProps = Object.keys(rest)
    .filter(r => r !== 'header')
    .reduce<Partial<Pick<MenuAttrProps, 'contents' | 'style'>>>(
      (memo, r) => ({...memo, [r]: (rest as any)[r]}),
      {}
    )
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
