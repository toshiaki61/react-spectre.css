import React, {FC} from 'react'

import cx from 'classnames'

import {ModalPartProps} from './interfaces'

const ModalTitle: FC<ModalPartProps> = ({children, className}) => (
  <div className={cx('modal-title', className)}>{children}</div>
)

export default ModalTitle
