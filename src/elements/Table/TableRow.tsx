import React from 'react'

import cx from 'classnames'

import {TableRowProps} from './interfaces'

const TableRow = ({className, children, onClick}: TableRowProps) => (
  <tr onClick={onClick} className={cx(className)}>
    {children}
  </tr>
)

export default TableRow
