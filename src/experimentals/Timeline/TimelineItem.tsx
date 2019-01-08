import React, {FC} from 'react'

import {TimelineItemProps} from './interfaces'

const TimelineItem: FC<TimelineItemProps> = ({children, id}) => (
  <div className="timeline-item" id={id}>
    {children}
  </div>
)

export default TimelineItem
