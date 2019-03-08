import React, {FC} from 'react'

import {Column} from 'layouts/index'

import {FilterItemProps} from './interfaces'

const FilterItem: FC<FilterItemProps> = ({children, ...rest}) => (
  <Column className="filter-item" size={4} {...rest}>
    {children}
  </Column>
)

export default FilterItem
