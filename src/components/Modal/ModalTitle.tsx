import React from 'react'

import cx from 'classnames'

import {ModalPartProps} from './interfaces'

const ModalTitle = ({children, className}: ModalPartProps) => (
  <div className={cx('modal-title', className)}>{children}</div>
)

export default ModalTitle
