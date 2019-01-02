import React from 'react'

import cx from 'classnames'

import {CardPartProps} from './interfaces'

const CardImage = ({children, className}: CardPartProps) => (
  <div className={cx('card-image', className)}>{children}</div>
)

export default CardImage
