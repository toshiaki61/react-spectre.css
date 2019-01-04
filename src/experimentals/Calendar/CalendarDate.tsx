import React from 'react'

import cx from 'classnames'

import {CalendarDateProps} from './interfaces'

const CalendarDate = ({children, className, ...rest}: CalendarDateProps) => (
  <div className={cx('calendar-date', className)} {...rest}>
    {children}
  </div>
)

export default CalendarDate
