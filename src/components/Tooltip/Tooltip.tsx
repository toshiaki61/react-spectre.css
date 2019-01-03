import React from 'react'

import cx from 'classnames'

import {TooltipProps} from './interfaces'

const Tooltip = ({children, text, position}: TooltipProps) => (
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
