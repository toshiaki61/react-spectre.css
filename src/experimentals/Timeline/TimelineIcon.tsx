import * as React from 'react'

import cx from 'clsx'

import {attr} from '../../utilities/attr'

import {TimelineIconProps} from './interfaces'

const TimelineIcon: React.FC<TimelineIconProps> = ({
  children,
  id,
  tooltip,
  lg,
}) => (
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
