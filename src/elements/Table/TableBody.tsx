import React, {FC} from 'react'

import cx from 'classnames'

import {TableBodyProps} from './interfaces'

const TableBody: FC<TableBodyProps> = ({className, children}) => (
  <tbody className={cx(className)}>{children}</tbody>
)

export default TableBody
