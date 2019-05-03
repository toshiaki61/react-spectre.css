import * as React from 'react'

import {TimelinePartProps} from './interfaces'

const TimelineContent: React.FC<TimelinePartProps> = ({children}) => (
  <div className="timeline-content">{children}</div>
)

export default TimelineContent
