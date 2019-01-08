import React, {FC} from 'react'

import cx from 'classnames'

import {CardPartProps} from './interfaces'

const CardBody: FC<CardPartProps> = ({children, className}) => (
  <div className={cx('card-body', className)}>{children}</div>
)

export default CardBody
