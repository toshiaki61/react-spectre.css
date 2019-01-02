import React, {ReactElement} from 'react'

import cx from 'classnames'

import {Button} from '@elements/Button'
import {Icon} from '@elements/Icon'

import {Menu} from '../Menu'

import {DropdownProps} from './interfaces'

const Dropdown = ({
  className,
  active,
  right,
  initialValue,
  contents,
  onClick,
  onMenuClick,
  children,
}: DropdownProps): ReactElement<DropdownProps> => {
  const classes = cx(
    'dropdown',
    {
      'dropdown-right': right,
      active,
    },
    className
  )
  return (
    <div className={classes}>
      <Button
        color="link"
        className="dropdown-toggle"
        tabIndex={0}
        onClick={onClick}
      >
        {initialValue} <Icon type="caret" />
      </Button>
      {children
        ? children
        : contents && <Menu onClick={onMenuClick} contents={contents} />}
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
