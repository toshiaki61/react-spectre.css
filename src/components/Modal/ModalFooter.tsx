import React, {FC} from 'react'

import cx from 'classnames'

import {ModalPartProps} from './interfaces'

const ModalFooter: FC<ModalPartProps> = ({children, className}) => (
  <div className={cx('modal-footer', className)}>{children}</div>
)

export default ModalFooter
