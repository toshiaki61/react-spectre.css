import React, {ReactElement} from 'react'

import cx from 'classnames'

import {CalendarBodyProps} from './interfaces'

const CalendarBody = ({
  children,
  className,
}: CalendarBodyProps): ReactElement<CalendarBodyProps> => (
  <div className={cx('calendar-body', className)}>{children}</div>
)

export default CalendarBody
