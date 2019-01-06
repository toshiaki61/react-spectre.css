import React, {SFC} from 'react'

import cx from 'classnames'

import {TableBodyProps} from './interfaces'

const TableBody: SFC<TableBodyProps> = ({className, children}) => (
  <tbody className={cx(className)}>{children}</tbody>
)

export default TableBody
