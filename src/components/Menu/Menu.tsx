import React, {ReactElement} from 'react'

import cx from 'classnames'

import {MenuProps} from './interfaces'
import MenuItem from './MenuItem'

const Menu = ({
  className,
  nav,
  contents,
  onClick,
  children,
  ...props
}: MenuProps): ReactElement<MenuProps> => {
  const classes = cx(
    'menu',
    {
      'menu-nav': nav,
    },
    className
  )
  const ulProps = Object.keys(props)
    .filter(p => p !== 'header')
    .reduce((memo, p) => Object.assign(memo, {[p]: props[p]}), {})
  return (
    <ul className={classes} {...ulProps}>
      {children
        ? children
        : contents &&
          contents.map((content, i) => {
            const key = content.id || `menu-item_${i}`
            return (
              <MenuItem
                key={key}
                {...content}
                onClick={content.onClick || onClick}
              />
            )
          })}
    </ul>
  )
}
Menu.defaultProps = {
  className: '',
  nav: false,
}

export default Menu
