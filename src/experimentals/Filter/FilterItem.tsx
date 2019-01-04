import React from 'react'

import {Column} from '@layouts/index'

import {FilterItemProps} from './interfaces'

const FilterItem = ({children}: FilterItemProps) => (
  <Column className="filter-item" size={4}>
    {children}
  </Column>
)

export default FilterItem
