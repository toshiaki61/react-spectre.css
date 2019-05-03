import * as React from 'react'

import cx from 'clsx'

import {TableBodyProps} from './interfaces'

const TableBody: React.FC<TableBodyProps> = ({className, children}) => (
  <tbody className={cx(className)}>{children}</tbody>
)

export default TableBody
