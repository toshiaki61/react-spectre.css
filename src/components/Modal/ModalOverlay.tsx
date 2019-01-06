import React, {SFC} from 'react'

import cx from 'classnames'

import {ModalCloseable, ModalPartProps} from './interfaces'

const ModalOverlay: SFC<ModalPartProps & ModalCloseable> = ({
  className,
  onClearClick,
}) => (
  <div
    className={cx('modal-overlay', className)}
    onClick={onClearClick}
    aria-label="Close"
  />
)

export default ModalOverlay
