import React, {SFC} from 'react'

import {TimelinePartProps} from './interfaces'

const TimelineContent: SFC<TimelinePartProps> = ({children}) => (
  <div className="timeline-content">{children}</div>
)

export default TimelineContent
