import React, {SFC} from 'react'

import cx from 'classnames'

import {CalendarDateProps} from './interfaces'

const CalendarDate: SFC<CalendarDateProps> = ({
  children,
  className,
  ...rest
}) => (
  <div className={cx('calendar-date', className)} {...rest}>
    {children}
  </div>
)

export default CalendarDate
