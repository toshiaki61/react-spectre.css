import React, {SFC} from 'react'

import cx from 'classnames'

import {EmptyPartProps} from './interfaces'

const EmptySubtitle: SFC<EmptyPartProps> = ({children, className}) => (
  <p className={cx('empty-subtitle', className)}>{children}</p>
)

export default EmptySubtitle
