import React, {FC} from 'react'

import cx from 'classnames'

import {CardPartProps} from './interfaces'

const CardFooter: FC<CardPartProps> = ({children, className}) => (
  <div className={cx('card-footer', className)}>{children}</div>
)

export default CardFooter
