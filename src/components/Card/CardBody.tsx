import React from 'react'

import cx from 'classnames'

import {CardPartProps} from './interfaces'

const CardBody = ({children, className}: CardPartProps) => (
  <div className={cx('card-body', className)}>{children}</div>
)

export default CardBody
