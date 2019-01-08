import React, {FC} from 'react'

import cx from 'classnames'

import {CardPartProps} from './interfaces'

const CardImage: FC<CardPartProps> = ({children, className}) => (
  <div className={cx('card-image', className)}>{children}</div>
)

export default CardImage
