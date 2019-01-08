import React, {FC} from 'react'

import cx from 'classnames'

import {HasIconProps} from './interfaces'

const HasIcon: FC<HasIconProps> = ({children, position}) => (
  <div className={cx({[`has-icon-${position}`]: position})}>{children}</div>
)

export default HasIcon
