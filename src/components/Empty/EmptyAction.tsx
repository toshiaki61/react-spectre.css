import React, {FC} from 'react'

import cx from 'classnames'

import {EmptyPartProps} from './interfaces'

const EmptyAction: FC<EmptyPartProps> = ({children, className}) => (
  <div className={cx('empty-action', className)}>{children}</div>
)

export default EmptyAction
