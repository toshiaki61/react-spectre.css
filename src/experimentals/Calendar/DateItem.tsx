import * as React from 'react'

import cx from 'clsx'

import {Button} from '../../elements'

import {CalendarDateItemProps} from './interfaces'

const DateItem: React.FC<CalendarDateItemProps> = ({
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
