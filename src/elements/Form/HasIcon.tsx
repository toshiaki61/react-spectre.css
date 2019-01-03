import React, {ReactNode} from 'react'

import cx from 'classnames'

import {HasIconProps} from './interfaces'

const HasIcon = ({children, position}: HasIconProps) => (
  <div className={cx({[`has-icon-${position}`]: position})}>{children}</div>
)

export default HasIcon
