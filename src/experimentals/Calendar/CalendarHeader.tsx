import React, {ReactElement} from 'react'

import cx from 'classnames'

import {CalendarHeaderProps} from './interfaces'

const CalendarHeader = ({
  children,
  className,
}: CalendarHeaderProps): ReactElement<CalendarHeaderProps> => (
  <div className={cx('calendar-header', className)}>{children}</div>
)

export default CalendarHeader
