import * as React from 'react'

import cx from 'clsx'

import {Button} from '../../elements/Button'
import {Icon} from '../../elements/Icon'

import {Menu} from '../Menu'

import {DropdownProps} from './interfaces'
import {hasDropdownChildren} from './util'

function renderDropdown(p: DropdownProps) {
  if (hasDropdownChildren(p)) {
    return p.children
  }
  return <Menu onClick={p.onMenuClick} contents={p.contents} />
}
const Dropdown: React.FC<DropdownProps> = p => {
  const {className, active, right, initialValue, onClick} = p
  return (
    <div
      className={cx(
        'dropdown',
        {
          'dropdown-right': right,
          active,
        },
        className
      )}
    >
      <Button
        color="link"
        className="dropdown-toggle"
        tabIndex={0}
        onClick={onClick}
      >
        {initialValue} <Icon type="caret" />
      </Button>
      {renderDropdown(p)}
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
