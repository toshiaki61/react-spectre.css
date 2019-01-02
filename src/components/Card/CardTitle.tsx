import React from 'react'

import cx from 'classnames'

import {CardPartProps} from './interfaces'

const CardTitle = ({children, className}: CardPartProps) => (
  <div className={cx('card-title', className)}>{children}</div>
)

export default CardTitle
