import React, {SFC} from 'react'

import {TimelineItemProps} from './interfaces'

const TimelineItem: SFC<TimelineItemProps> = ({children, id}) => (
  <div className="timeline-item" id={id}>
    {children}
  </div>
)

export default TimelineItem
