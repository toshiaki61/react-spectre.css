import React, {FC} from 'react'

import cx from 'classnames'

import {TimelinePartProps} from './interfaces'

const TimelineLeft: FC<TimelinePartProps> = ({children}) => (
  <div className={cx('timeline-left')}>{children}</div>
)

export default TimelineLeft
