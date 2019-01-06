import React, {SFC} from 'react'

import cx from 'classnames'

import {ModalPartProps} from './interfaces'

const ModalTitle: SFC<ModalPartProps> = ({children, className}) => (
  <div className={cx('modal-title', className)}>{children}</div>
)

export default ModalTitle
