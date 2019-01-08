import React, {FC} from 'react'

import cx from 'classnames'

import {TableRowProps} from './interfaces'

const TableRow: FC<TableRowProps> = ({className, children, onClick}) => (
  <tr onClick={onClick} className={cx(className)}>
    {children}
  </tr>
)

export default TableRow
