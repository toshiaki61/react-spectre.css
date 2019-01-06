import React, {SFC} from 'react'

import cx from 'classnames'

import {IconProps} from './interfaces'

const Icon: SFC<IconProps> = ({className, size, type, ...rest}) => (
  <i
    className={cx(
      'icon',
      `icon-${type}`,
      {
        [`icon-${size}x`]: size,
      },
      className
    )}
    {...rest}
  />
)

export default Icon
