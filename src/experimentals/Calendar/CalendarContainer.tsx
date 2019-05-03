import * as React from 'react'

import cx from 'clsx'

import {CalendarContainerProps} from './interfaces'

const CalendarContainer: React.FC<CalendarContainerProps> = ({
  children,
  className,
}) => <div className={cx('calendar-container', className)}>{children}</div>

export default CalendarContainer
