import React, {SFC} from 'react'

import cx from 'classnames'

import {CardPartProps} from './interfaces'

const CardBody: SFC<CardPartProps> = ({children, className}) => (
  <div className={cx('card-body', className)}>{children}</div>
)

export default CardBody
