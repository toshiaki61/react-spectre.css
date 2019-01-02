import React from 'react'

import cx from 'classnames'

import {ModalPartProps} from './interfaces'

const ModalBody = ({children, className}: ModalPartProps) => (
  <div className={cx('modal-body', className)}>
    <div className="content">{children}</div>
  </div>
)

export default ModalBody
