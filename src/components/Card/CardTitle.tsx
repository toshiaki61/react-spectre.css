import * as React from 'react'

import cx from 'clsx'

import {CardPartProps} from './interfaces'

const CardTitle: React.FC<CardPartProps> = ({children, className}) => (
  <div className={cx('card-title', className)}>{children}</div>
)

export default CardTitle
