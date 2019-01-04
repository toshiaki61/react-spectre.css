import React from 'react'

import cx from 'classnames'

import {TimelinePartProps} from './interfaces'

const TimelineLeft = ({children}: TimelinePartProps) => (
  <div className={cx('timeline-left')}>{children}</div>
)

export default TimelineLeft
