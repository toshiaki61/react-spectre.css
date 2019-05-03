import * as React from 'react'

import cx from 'clsx'

import {CardPartProps} from './interfaces'

const CardBody: React.FC<CardPartProps> = ({children, className}) => (
  <div className={cx('card-body', className)}>{children}</div>
)

export default CardBody
