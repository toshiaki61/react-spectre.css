import React, {FC} from 'react'

import cx from 'classnames'

import {ModalPartProps} from './interfaces'

const ModalContainer: FC<ModalPartProps> = ({children, className}) => (
  <div className={cx('modal-container', className)}>{children}</div>
)

export default ModalContainer
