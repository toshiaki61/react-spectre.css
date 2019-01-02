import React from 'react'

import cx from 'classnames'

import {ModalPartProps} from './interfaces'

const ModalContainer = ({children, className}: ModalPartProps) => (
  <div className={cx('modal-container', className)}>{children}</div>
)

export default ModalContainer
