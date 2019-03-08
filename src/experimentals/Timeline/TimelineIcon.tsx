import React, {FC} from 'react'

import cx from 'classnames'

import {attr} from 'utilities/attr'

import {TimelineIconProps} from './interfaces'

const TimelineIcon: FC<TimelineIconProps> = ({children, id, tooltip, lg}) => (
  <a
    href={`#${id}`}
    {...attr({
      tooltip,
      className: cx('timeline-icon', {
        'icon-lg': lg,
      }),
    })}
  >
    {children}
  </a>
)

export default TimelineIcon
