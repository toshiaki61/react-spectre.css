import React from 'react'

import {TimelinePartProps} from './interfaces'

const TimelineContent = ({children}: TimelinePartProps) => (
  <div className="timeline-content">{children}</div>
)

export default TimelineContent
