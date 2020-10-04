import * as React from 'react'

import cx from 'clsx'

import {IconProps} from './interfaces'

const Icon: React.FC<IconProps> = ({className, size, type, ...rest}) => (
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
