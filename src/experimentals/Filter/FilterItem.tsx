import React, {FC} from 'react'

import {Column} from '@layouts/index'

import {FilterItemProps} from './interfaces'

const FilterItem: FC<FilterItemProps> = ({children}) => (
  <Column className="filter-item" size={4}>
    {children}
  </Column>
)

export default FilterItem
