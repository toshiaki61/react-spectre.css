import React, {ReactElement} from 'react'

import cx from 'classnames'

import {EmptyPartProps} from './interfaces'

const EmptyTitle = ({
  children,
  className,
}: EmptyPartProps): ReactElement<EmptyPartProps> => (
  <p className={cx('empty-title', className)}>{children}</p>
)
EmptyTitle.defaultProps = {
  className: '',
}

export default EmptyTitle
