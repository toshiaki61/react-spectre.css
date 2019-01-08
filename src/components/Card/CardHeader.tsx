import React, {FC} from 'react'

import cx from 'classnames'

import {CardPartProps} from './interfaces'

const CardHeader: FC<CardPartProps> = ({children, className}) => (
  <div className={cx('card-header', className)}>{children}</div>
)

export default CardHeader
