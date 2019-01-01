import React from 'react'

import cx from 'classnames'

import {TableBodyProps} from './interfaces'

const TableBody = ({className, children}: TableBodyProps) => (
  <tbody className={cx(className)}>{children}</tbody>
)

export default TableBody
