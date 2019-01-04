import React from 'react'

import {TimelineItemProps} from './interfaces'

const TimelineItem = ({children, id}: TimelineItemProps) => (
  <div className="timeline-item" id={id}>
    {children}
  </div>
)

export default TimelineItem
