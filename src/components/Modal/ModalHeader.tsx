import Reac from 'react'

import cx from 'classnames'

import {ModalPartProps} from './interfaces'

const ModalHeader = ({children, className}: ModalPartProps) => (
  <div className={cx('modal-header', className)}>{children}</div>
)

export default ModalHeader
