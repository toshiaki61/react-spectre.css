import React, {FC} from 'react'

import cx from 'classnames'

import {EmptyPartProps} from './interfaces'

const EmptySubtitle: FC<EmptyPartProps> = ({children, className}) => (
  <p className={cx('empty-subtitle', className)}>{children}</p>
)

export default EmptySubtitle
