import * as React from 'react'

import cx from 'clsx'

import {Divider} from '../../utilities/Divider'

import {MenuItemProps} from './interfaces'
import {hasMenuItemChildren, isMenuItemDivider} from './util'

import MenuBadge from './MenuBadge'

function renderMenuitem(p: MenuItemProps) {
  if (isMenuItemDivider(p)) {
    return null
  }
  if (hasMenuItemChildren(p)) {
    return p.children
  }
  const {id, link, content, active, badge, onClick} = p
  const handleItemClick =
    // useCallback(
    (e: React.MouseEvent<any>) => {
      e.preventDefault()
      if (onClick) {
        onClick(e, id || '')
      }
    }
  // ,[id])
  return (
    <React.Fragment>
      <MenuBadge content={badge} />
      <a href={link} className={cx({active})} onClick={handleItemClick}>
        {content}
      </a>
    </React.Fragment>
  )
}
const MenuItem: React.FC<MenuItemProps> = p => {
  const {className} = p
  if (isMenuItemDivider(p)) {
    return (
      <Divider
        className={cx('menu-item', className)}
        content={p.divider === 'string' ? p.divider : ''}
      />
    )
  }
  return <li className={cx('menu-item', className)}>{renderMenuitem(p)}</li>
}
MenuItem.defaultProps = {
  link: 'javascript:void(0)',
}

export default MenuItem
