import React, {SFC} from 'react'

import cx from 'classnames'

import {EmptyPartProps} from './interfaces'

const EmptyTitle: SFC<EmptyPartProps> = ({children, className}) => (
  <p className={cx('empty-title', className)}>{children}</p>
)

export default EmptyTitle
