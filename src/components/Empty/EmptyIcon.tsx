import React, {SFC} from 'react'

import cx from 'classnames'

import {EmptyPartProps} from './interfaces'

const EmptyIcon: SFC<EmptyPartProps> = ({children, className}) => (
  <div className={cx('empty-icon', className)}>{children}</div>
)
export default EmptyIcon
