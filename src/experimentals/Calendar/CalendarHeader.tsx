import * as React from 'react'

import cx from 'clsx'

import {CalendarHeaderProps} from './interfaces'

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  children,
  className,
}) => <div className={cx('calendar-header', className)}>{children}</div>

export default CalendarHeader
