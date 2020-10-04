import * as React from 'react'

import cx from 'clsx'

import {EmptyPartProps} from './interfaces'

const EmptyIcon: React.FC<EmptyPartProps> = ({children, className}) => (
  <div className={cx('empty-icon', className)}>{children}</div>
)
export default EmptyIcon
