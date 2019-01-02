import React from 'react'

import cx from 'classnames'

import {CardPartProps} from './interfaces'

const CardSubtitle = ({children, className}: CardPartProps) => (
  <div className={cx('card-subtitle', className)}>{children}</div>
)

export default CardSubtitle
