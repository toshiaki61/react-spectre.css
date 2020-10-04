import * as React from 'react'

import cx from 'clsx'

import {CalendarNavProps} from './interfaces'

const CalendarNav: React.FC<CalendarNavProps> = ({children, className}) => {
  return (
    <div className={cx('calendar-nav', 'navbar', className)}>{children}</div>
  )
}

export default CalendarNav
