import React, {MouseEvent, ReactElement, useCallback} from 'react'

import cx from 'classnames'

import {Divider} from '@utils/Divider'

import {MenuItemProps} from './interfaces'
import MenuBadge from './MenuBadge'

const MenuItem = ({
  id,
  link,
  content,
  className,
  divider,
  active,
  badge,
  onClick,
  ...props
}: MenuItemProps): ReactElement<MenuItemProps> => {
  const classes = cx('menu-item', className)
  if (divider) {
    return (
      <Divider
        className={className}
        content={typeof divider === 'string' ? divider : ''}
      />
    )
  }
  if (typeof content !== 'string') {
    return (
      <li className={classes} {...props}>
        {content}
      </li>
    )
  }

  const handleItemClick = useCallback(
    (e: MouseEvent<any>) => onClick && onClick(e, id || ''),
    [id]
  )

  return (
    <li className={classes} {...props}>
      <MenuBadge content={badge} />
      <a href={link} className={cx({active})} onClick={handleItemClick}>
        {content}
      </a>
    </li>
  )
}
MenuItem.defaultProps = {
  link: 'javascript:void(0)',
  content: '',
  className: '',
  divider: false,
  active: false,
  badge: 0,
}

export default MenuItem
