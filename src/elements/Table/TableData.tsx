import * as React from 'react'

import cx from 'clsx'
import {TableDataProps} from './interfaces'

const TableData: React.FC<TableDataProps> = ({className, children}) => (
  <td className={cx(className)}>{children}</td>
)

export default TableData
