import * as React from 'react'

import cx from 'clsx'

import {CalendarDateProps} from './interfaces'

const CalendarDate: React.FC<CalendarDateProps> = ({
  children,
  className,
  ...rest
}) => (
  <div className={cx('calendar-date', className)} {...rest}>
    {children}
  </div>
)

export default CalendarDate
