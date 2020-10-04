import * as React from 'react'

import cx from 'clsx'

import {ModalPartProps} from './interfaces'

const ModalFooter: React.FC<ModalPartProps> = ({children, className}) => (
  <div className={cx('modal-footer', className)}>{children}</div>
)

export default ModalFooter
