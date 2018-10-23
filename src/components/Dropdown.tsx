import React, {ReactElement, MouseEvent, FocusEvent} from 'react'
import classnames from 'classnames'

import Menu, {ItemProps as MenuItemProps} from './Menu'
import Button from '../elements/Button'
import Icon from '../elements/Icon'

export interface DropdownProps {
  className?: string
  active?: boolean
  right?: boolean
  initialValue?: string
  contents: Array<MenuItemProps>
  onClick: (e: MouseEvent<any>) => void
  onMenuClick: (e: MouseEvent<any>, id: string) => void
  onBlur: (e: FocusEvent<any>) => void
}
const Dropdown = ({
  className,
  active,
  right,
  initialValue,
  contents,
  onClick,
  onMenuClick,
  ...props
}: DropdownProps): ReactElement<DropdownProps> => {
  const classes = classnames(
    'dropdown',
    {
      'dropdown-right': right,
      active,
    },
    className
  )
  return (
    <div className={classes} {...props}>
      <Button link className="dropdown-toggle" tabIndex="0" onClick={onClick}>
        {initialValue} <Icon caret />
      </Button>
      <Menu onClick={onMenuClick} contents={contents} />
    </div>
  )
}
Dropdown.defaultProps = {
  className: '',
  active: false,
  right: false,
  initialValue: '',
}

export default Dropdown
