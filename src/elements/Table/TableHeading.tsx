import * as React from 'react'

import cx from 'clsx'

import {TableHeadingProps, TableSortDirection} from './interfaces'

import {Button} from '../Button'
import {Icon} from '../Icon'

const TableHeading: React.FC<TableHeadingProps> = ({
  className,
  children,
  onClick,
  sortDirection,
  ...rest
}) => (
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
