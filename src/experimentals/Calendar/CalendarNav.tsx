import React, {SFC} from 'react'

import cx from 'classnames'

import {CalendarNavProps} from './interfaces'

const CalendarNav: SFC<CalendarNavProps> = ({children, className}) => {
  return (
    <div className={cx('calendar-nav', 'navbar', className)}>{children}</div>
  )
}

export default CalendarNav
