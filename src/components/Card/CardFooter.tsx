import * as React from 'react'

import cx from 'clsx'

import {CardPartProps} from './interfaces'

const CardFooter: React.FC<CardPartProps> = ({children, className}) => (
  <div className={cx('card-footer', className)}>{children}</div>
)

export default CardFooter
