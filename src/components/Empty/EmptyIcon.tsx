import React from 'react'

import cx from 'classnames'

import {EmptyPartProps} from './interfaces'

const EmptyIcon = ({children, className}: EmptyPartProps) => (
  <div className={cx('empty-icon', className)}>{children}</div>
)
export default EmptyIcon
