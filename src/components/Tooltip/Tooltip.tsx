import React from 'react'

import cx from 'classnames'

import {TooltipProps} from './interfaces'

const Tooltip = ({children, text, position}: TooltipProps) => (
  <span
    className={cx('tooltip', {
      'tooltip-right': position === 'right',
      'tooltip-left': position === 'left',
      'tooltip-bottom': position === 'bottom',
    })}
    data-tooltip={text}
  >
    {children}
  </span>
)

export default Tooltip
