import React from 'react'

import cx from 'classnames'

import {ModalCloseable, ModalPartProps} from './interfaces'

const ModalOverlay = ({
  className,
  onClearClick,
}: ModalPartProps & ModalCloseable) => (
  <div
    className={cx('modal-overlay', className)}
    onClick={onClearClick}
    aria-label="Close"
  />
)

export default ModalOverlay
