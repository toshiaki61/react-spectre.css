import React, {ReactElement} from 'react'

import {MenuBadgeProps} from './interfaces'

const MenuBadge = ({
  content,
}: MenuBadgeProps): ReactElement<MenuBadgeProps> | null => {
  if (!content) {
    return null
  }
  return (
    <div className="menu-badge">
      <span className="label label-primary">{content}</span>
    </div>
  )
}
MenuBadge.defaultProps = {
  content: '',
}

export default MenuBadge
