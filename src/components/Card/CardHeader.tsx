import * as React from 'react'

import cx from 'clsx'

import {CardPartProps} from './interfaces'

const CardHeader: React.FC<CardPartProps> = ({children, className}) => (
  <div className={cx('card-header', className)}>{children}</div>
)

export default CardHeader
