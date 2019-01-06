import React, {SFC} from 'react'

import cx from 'classnames'

import {ModalPartProps} from './interfaces'

const ModalBody: SFC<ModalPartProps> = ({children, className}) => (
  <div className={cx('modal-body', className)}>
    <div className="content">{children}</div>
  </div>
)

export default ModalBody
