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
  const ulProps = Object.keys(props)
    .filter(p => p !== 'header')
    .reduce((memo, p) => ({...memo, [p]: props[p]}), {})
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
      {children
        ? children
        : contents &&
          contents.map((content, i) => (
            <MenuItem
              key={content.id}
              {...content}
              onClick={content.onClick || onClick}
            />
          ))}
    </ul>
  )
}
Menu.defaultProps = {
  className: '',
  nav: false,
}

export default Menu
