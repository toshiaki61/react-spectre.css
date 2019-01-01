import React from 'react'

import cx from 'classnames'

import {ButtonGroupProps} from './interfaces'

const ButtonGroup = ({
  children,
  className = '',
  block = false,
}: ButtonGroupProps) => {
  const classes = cx('btn-group', {'btn-group-block': block}, className)
  return <div className={classes}>{children}</div>
}

export default ButtonGroup
