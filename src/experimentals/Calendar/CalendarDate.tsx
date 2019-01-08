import React, {FC} from 'react'

import cx from 'classnames'

import {CalendarDateProps} from './interfaces'

const CalendarDate: FC<CalendarDateProps> = ({
  children,
  className,
  ...rest
}) => (
  <div className={cx('calendar-date', className)} {...rest}>
    {children}
  </div>
)

export default CalendarDate
