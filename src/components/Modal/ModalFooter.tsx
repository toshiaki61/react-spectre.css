import React from 'react'

import cx from 'classnames'

import {ModalPartProps} from './interfaces'
const ModalFooter = ({children, className}: ModalPartProps) => (
  <div className={cx('modal-footer', className)}>{children}</div>
)

export default ModalFooter
