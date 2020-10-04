import * as React from 'react'

import cx from 'clsx'

import {TableHeaderProps} from './interfaces'

const TableHeader: React.FC<TableHeaderProps> = ({className, children}) => (
  <thead className={cx(className)}>{children}</thead>
)

export default TableHeader
