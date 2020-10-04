import * as React from 'react'

import cx from 'clsx'

import {ModalPartProps} from './interfaces'

const ModalBody: React.FC<ModalPartProps> = ({children, className}) => (
  <div className={cx('modal-body', className)}>
    <div className="content">{children}</div>
  </div>
)

export default ModalBody
