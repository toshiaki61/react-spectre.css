import React from 'react'

import cx from 'classnames'
import {TableDataProps} from './interfaces'

const TableData = ({className, children}: TableDataProps) => (
  <td className={cx(className)}>{children}</td>
)

export default TableData
