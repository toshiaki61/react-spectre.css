import React, {FC} from 'react'

import cx from 'classnames'
import {TableDataProps} from './interfaces'

const TableData: FC<TableDataProps> = ({className, children}) => (
  <td className={cx(className)}>{children}</td>
)

export default TableData
