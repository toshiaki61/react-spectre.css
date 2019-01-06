import React, {SFC} from 'react'

import cx from 'classnames'

import {CalendarBodyProps} from './interfaces'

const CalendarBody: SFC<CalendarBodyProps> = ({children, className}) => (
  <div className={cx('calendar-body', className)}>{children}</div>
)

export default CalendarBody
