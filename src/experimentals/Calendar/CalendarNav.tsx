import React, {FC} from 'react'

import cx from 'classnames'

import {CalendarNavProps} from './interfaces'

const CalendarNav: FC<CalendarNavProps> = ({children, className}) => {
  return (
    <div className={cx('calendar-nav', 'navbar', className)}>{children}</div>
  )
}

export default CalendarNav
