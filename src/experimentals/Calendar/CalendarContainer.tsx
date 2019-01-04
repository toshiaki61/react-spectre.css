import React from 'react'

import cx from 'classnames'

import {CalendarContainerProps} from './interfaces'

const CalendarContainer = ({children, className}: CalendarContainerProps) => (
  <div className={cx('calendar-container', className)}>{children}</div>
)

export default CalendarContainer
