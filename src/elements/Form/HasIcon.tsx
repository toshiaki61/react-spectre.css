import * as React from 'react'

import cx from 'clsx'

import {HasIconProps} from './interfaces'

const HasIcon: React.FC<HasIconProps> = ({children, position}) => (
  <div className={cx({[`has-icon-${position}`]: position})}>{children}</div>
)

export default HasIcon
