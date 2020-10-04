import * as React from 'react'

import cx from 'clsx'

import {ModalPartProps} from './interfaces'

const ModalContainer: React.FC<ModalPartProps> = ({children, className}) => (
  <div className={cx('modal-container', className)}>{children}</div>
)

export default ModalContainer
