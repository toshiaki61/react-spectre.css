import * as React from 'react'

import cx from 'clsx'

import {EmptyPartProps} from './interfaces'

const EmptyAction: React.FC<EmptyPartProps> = ({children, className}) => (
  <div className={cx('empty-action', className)}>{children}</div>
)

export default EmptyAction
