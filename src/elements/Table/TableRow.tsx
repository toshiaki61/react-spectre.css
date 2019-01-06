import React, {SFC} from 'react'

import cx from 'classnames'

import {TableRowProps} from './interfaces'

const TableRow: SFC<TableRowProps> = ({className, children, onClick}) => (
  <tr onClick={onClick} className={cx(className)}>
    {children}
  </tr>
)

export default TableRow
