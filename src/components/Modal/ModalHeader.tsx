import React, {SFC} from 'react'

import cx from 'classnames'

import {ModalPartProps} from './interfaces'

const ModalHeader: SFC<ModalPartProps> = ({children, className}) => (
  <div className={cx('modal-header', className)}>{children}</div>
)

export default ModalHeader
