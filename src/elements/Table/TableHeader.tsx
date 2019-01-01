import React from 'react'

import cx from 'classnames'

import {TableHeaderProps} from './interfaces'

const TableHeader = ({className, children}: TableHeaderProps) => (
  <thead className={cx(className)}>{children}</thead>
)

export default TableHeader
