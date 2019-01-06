import React, {SFC} from 'react'

import cx from 'classnames'

import {attr} from '@utils/attr'

import {TimelineIconProps} from './interfaces'

const TimelineIcon: SFC<TimelineIconProps> = ({children, id, tooltip, lg}) => (
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
