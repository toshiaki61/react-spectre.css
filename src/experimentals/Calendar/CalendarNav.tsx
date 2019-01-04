import React, {ReactElement} from 'react'

import cx from 'classnames'

import {CalendarNavProps} from './interfaces'

const CalendarNav = ({
  children,
  className,
}: CalendarNavProps): ReactElement<CalendarNavProps> => {
  return (
    <div className={cx('calendar-nav', 'navbar', className)}>{children}</div>
  )
}

export default CalendarNav
