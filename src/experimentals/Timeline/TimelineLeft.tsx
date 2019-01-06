import React, {SFC} from 'react'

import cx from 'classnames'

import {TimelinePartProps} from './interfaces'

const TimelineLeft: SFC<TimelinePartProps> = ({children}) => (
  <div className={cx('timeline-left')}>{children}</div>
)

export default TimelineLeft
