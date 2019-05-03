import * as React from 'react'

import cx from 'clsx'

import {EmptyPartProps} from './interfaces'

const EmptyTitle: React.FC<EmptyPartProps> = ({children, className}) => (
  <p className={cx('empty-title', className)}>{children}</p>
)

export default EmptyTitle
