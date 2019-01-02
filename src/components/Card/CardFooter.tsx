import React from 'react'

import cx from 'classnames'

import {CardPartProps} from './interfaces'

const CardFooter = ({children, className}: CardPartProps) => (
  <div className={cx('card-footer', className)}>{children}</div>
)

export default CardFooter
