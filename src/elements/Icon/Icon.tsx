import React from 'react'

import cx from 'classnames'

import {IconProps} from './interfaces'

const Icon = ({className, size, type, ...props}: IconProps) => {
  const classes = cx(
    'icon',
    `icon-${type}`,
    {
      [`icon-${size}x`]: size,
    },
    className
  )
  return <i className={classes} {...props} />
}

Icon.defaultProps = {
  className: '',
}

export default Icon
