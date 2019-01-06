import React, {SFC} from 'react'

import {Column} from '@layouts/index'

import {FilterItemProps} from './interfaces'

const FilterItem: SFC<FilterItemProps> = ({children}) => (
  <Column className="filter-item" size={4}>
    {children}
  </Column>
)

export default FilterItem
