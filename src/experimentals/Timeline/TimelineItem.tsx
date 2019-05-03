import * as React from 'react'

import {TimelineItemProps} from './interfaces'

const TimelineItem: React.FC<TimelineItemProps> = ({children, id}) => (
  <div className="timeline-item" id={id}>
    {children}
  </div>
)

export default TimelineItem
