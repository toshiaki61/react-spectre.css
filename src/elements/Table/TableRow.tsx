import * as React from 'react'

import cx from 'clsx'

import {TableRowProps} from './interfaces'

const TableRow: React.FC<TableRowProps> = ({className, children, onClick}) => (
  <tr onClick={onClick} className={cx(className)}>
    {children}
  </tr>
)

export default TableRow
