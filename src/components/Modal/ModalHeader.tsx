import * as React from 'react'

import cx from 'clsx'

import {ModalPartProps} from './interfaces'

const ModalHeader: React.FC<ModalPartProps> = ({children, className}) => (
  <div className={cx('modal-header', className)}>{children}</div>
)

export default ModalHeader
