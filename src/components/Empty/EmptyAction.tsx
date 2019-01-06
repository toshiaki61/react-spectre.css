import React, {SFC} from 'react'

import cx from 'classnames'

import {EmptyPartProps} from './interfaces'

const EmptyAction: SFC<EmptyPartProps> = ({children, className}) => (
  <div className={cx('empty-action', className)}>{children}</div>
)

export default EmptyAction
