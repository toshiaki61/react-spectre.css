import React, {FC} from 'react'

import cx from 'classnames'

import {CardPartProps} from './interfaces'

const CardSubtitle: FC<CardPartProps> = ({children, className}) => (
  <div className={cx('card-subtitle', className)}>{children}</div>
)

export default CardSubtitle
