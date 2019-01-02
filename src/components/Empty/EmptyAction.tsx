import React from 'react'

import cx from 'classnames'

import {EmptyPartProps} from './interfaces'

const EmptyAction = ({children, className}: EmptyPartProps) => (
  <div className={cx('empty-action', className)}>{children}</div>
)

export default EmptyAction
