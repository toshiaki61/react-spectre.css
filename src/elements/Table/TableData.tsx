import React, {SFC} from 'react'

import cx from 'classnames'
import {TableDataProps} from './interfaces'

const TableData: SFC<TableDataProps> = ({className, children}) => (
  <td className={cx(className)}>{children}</td>
)

export default TableData
