import * as React from 'react'

import cx from 'clsx'

import {TooltipProps} from './interfaces'

const Tooltip: React.FC<TooltipProps> = ({children, text, position}) => (
  <span
    className={cx('tooltip', {
      [`tooltip-${position}`]: position,
    })}
    data-tooltip={text}
  >
    {children}
  </span>
)

export default Tooltip
