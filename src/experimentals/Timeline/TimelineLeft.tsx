import * as React from 'react'

import cx from 'clsx'

import {TimelinePartProps} from './interfaces'

const TimelineLeft: React.FC<TimelinePartProps> = ({children}) => (
  <div className={cx('timeline-left')}>{children}</div>
)

export default TimelineLeft
