import * as React from 'react'

import cx from 'clsx'

import {CardPartProps} from './interfaces'

const CardImage: React.FC<CardPartProps> = ({children, className}) => (
  <div className={cx('card-image', className)}>{children}</div>
)

export default CardImage
