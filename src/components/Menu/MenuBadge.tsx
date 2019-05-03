import * as React from 'react'

import {MenuBadgeProps} from './interfaces'

const MenuBadge: React.FC<MenuBadgeProps> = ({content}) => {
  if (!content) {
    return null
  }
  return (
    <div className="menu-badge">
      <span className="label label-primary">{content}</span>
    </div>
  )
}

export default MenuBadge
