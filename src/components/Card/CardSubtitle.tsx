import * as React from 'react'

import cx from 'clsx'

import {CardPartProps} from './interfaces'

const CardSubtitle: React.FC<CardPartProps> = ({children, className}) => (
  <div className={cx('card-subtitle', className)}>{children}</div>
)

export default CardSubtitle
