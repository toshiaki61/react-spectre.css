import React from 'react'

import cx from 'classnames'

import {Button} from '@elements/index'

import {DateItemProps} from './interfaces'

const DateItem = ({
  children,
  active,
  disabled,
  badge,
  today,
  onClick,
}: DateItemProps) => (
  <Button
    disabled={disabled}
    className={cx('date-item', {
      active,
      badge,
      'date-today': today,
    })}
    onClick={onClick}
  >
    {children}
  </Button>
)

export default DateItem
