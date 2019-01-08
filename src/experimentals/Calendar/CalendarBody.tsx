import React, {FC} from 'react'

import cx from 'classnames'

import {CalendarBodyProps} from './interfaces'

const CalendarBody: FC<CalendarBodyProps> = ({children, className}) => (
  <div className={cx('calendar-body', className)}>{children}</div>
)

export default CalendarBody
