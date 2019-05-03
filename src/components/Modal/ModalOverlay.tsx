import * as React from 'react'

import cx from 'clsx'

import {ModalCloseable, ModalPartProps} from './interfaces'

const ModalOverlay: React.FC<ModalPartProps & ModalCloseable> = ({
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
