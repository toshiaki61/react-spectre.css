import React, {SFC} from 'react'

import cx from 'classnames'

import {TooltipProps} from './interfaces'

const Tooltip: SFC<TooltipProps> = ({children, text, position}) => (
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
