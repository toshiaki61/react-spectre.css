import React, {SFC} from 'react'

import cx from 'classnames'

import {TableHeaderProps} from './interfaces'

const TableHeader: SFC<TableHeaderProps> = ({className, children}) => (
  <thead className={cx(className)}>{children}</thead>
)

export default TableHeader
