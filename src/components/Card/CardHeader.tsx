import React, {SFC} from 'react'

import cx from 'classnames'

import {CardPartProps} from './interfaces'

const CardHeader: SFC<CardPartProps> = ({children, className}) => (
  <div className={cx('card-header', className)}>{children}</div>
)

export default CardHeader
