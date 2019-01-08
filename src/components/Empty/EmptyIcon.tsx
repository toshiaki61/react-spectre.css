import React, {FC} from 'react'

import cx from 'classnames'

import {EmptyPartProps} from './interfaces'

const EmptyIcon: FC<EmptyPartProps> = ({children, className}) => (
  <div className={cx('empty-icon', className)}>{children}</div>
)
export default EmptyIcon
