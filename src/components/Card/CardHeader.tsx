import React from 'react'

import cx from 'classnames'

import {CardPartProps} from './interfaces'

const CardHeader = ({children, className}: CardPartProps) => (
  <div className={cx('card-header', className)}>{children}</div>
)

export default CardHeader
