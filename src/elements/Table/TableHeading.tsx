import React from 'react'

import cx from 'classnames'

import {TableHeadingProps, TableSortDirection} from './interfaces'

import {Button} from '@elements/Button'
import {Icon} from '@elements/Icon'

const TableHeading = ({
  className,
  children,
  onClick,
  sortDirection,
  ...rest
}: TableHeadingProps) => (
  <th className={cx(className)} onClick={onClick} {...rest}>
    {children}
    {sortDirection && (
      <Button color="link" size="sm">
        <Icon
          type={
            sortDirection === TableSortDirection.ASC ? 'arrow-up' : 'arrow-down'
          }
        />
      </Button>
    )}
  </th>
)

export default TableHeading
