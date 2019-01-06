import React, {SFC} from 'react'

import cx from 'classnames'

import {CalendarHeaderProps} from './interfaces'

const CalendarHeader: SFC<CalendarHeaderProps> = ({children, className}) => (
  <div className={cx('calendar-header', className)}>{children}</div>
)

export default CalendarHeader
