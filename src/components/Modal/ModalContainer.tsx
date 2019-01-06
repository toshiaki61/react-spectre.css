import React, {SFC} from 'react'

import cx from 'classnames'

import {ModalPartProps} from './interfaces'

const ModalContainer: SFC<ModalPartProps> = ({children, className}) => (
  <div className={cx('modal-container', className)}>{children}</div>
)

export default ModalContainer
