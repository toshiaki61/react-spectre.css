import React, {FC} from 'react'

import cx from 'classnames'

import {TableHeaderProps} from './interfaces'

const TableHeader: FC<TableHeaderProps> = ({className, children}) => (
  <thead className={cx(className)}>{children}</thead>
)

export default TableHeader
