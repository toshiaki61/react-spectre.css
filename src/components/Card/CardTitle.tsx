import React, {SFC} from 'react'

import cx from 'classnames'

import {CardPartProps} from './interfaces'

const CardTitle: SFC<CardPartProps> = ({children, className}) => (
  <div className={cx('card-title', className)}>{children}</div>
)

export default CardTitle
