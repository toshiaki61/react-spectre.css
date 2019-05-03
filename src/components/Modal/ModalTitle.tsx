import * as React from 'react'

import cx from 'clsx'

import {ModalPartProps} from './interfaces'

const ModalTitle: React.FC<ModalPartProps> = ({children, className}) => (
  <div className={cx('modal-title', className)}>{children}</div>
)

export default ModalTitle
