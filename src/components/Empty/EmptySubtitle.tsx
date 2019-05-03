import * as React from 'react'

import cx from 'clsx'

import {EmptyPartProps} from './interfaces'

const EmptySubtitle: React.FC<EmptyPartProps> = ({children, className}) => (
  <p className={cx('empty-subtitle', className)}>{children}</p>
)

export default EmptySubtitle
