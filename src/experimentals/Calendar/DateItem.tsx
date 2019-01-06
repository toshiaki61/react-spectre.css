import React, {SFC} from 'react'

import cx from 'classnames'

import {Button} from '@elements/index'

import {CalendarDateItemProps} from './interfaces'

const DateItem: SFC<CalendarDateItemProps> = ({
  children,
  active,
  disabled,
  badge,
  today,
  onClick,
}) => (
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
