import React, {ReactElement} from 'react'

import cx from 'classnames'

import {EmptyPartProps} from './interfaces'

const EmptySubtitle = ({
  children,
  className,
}: EmptyPartProps): ReactElement<EmptyPartProps> => (
  <p className={cx('empty-subtitle', className)}>{children}</p>
)
EmptySubtitle.defaultProps = {
  children: null,
  className: '',
}

export default EmptySubtitle
