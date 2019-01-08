import React, {FC} from 'react'

import {TimelinePartProps} from './interfaces'

const TimelineContent: FC<TimelinePartProps> = ({children}) => (
  <div className="timeline-content">{children}</div>
)

export default TimelineContent
