import React, {FC} from 'react'

import cx from 'classnames'

import {CalendarContainerProps} from './interfaces'

const CalendarContainer: FC<CalendarContainerProps> = ({
  children,
  className,
}) => <div className={cx('calendar-container', className)}>{children}</div>

export default CalendarContainer
