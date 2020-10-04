import * as React from 'react'

import cx from 'clsx'

import {CalendarBodyProps} from './interfaces'

const CalendarBody: React.FC<CalendarBodyProps> = ({children, className}) => (
  <div className={cx('calendar-body', className)}>{children}</div>
)

export default CalendarBody
