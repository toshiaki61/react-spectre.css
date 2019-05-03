import * as React from 'react'

import {Column} from '../../layouts/index'

import {FilterItemProps} from './interfaces'

const FilterItem: React.FC<FilterItemProps> = ({children, ...rest}) => (
  <Column className="filter-item" size={4} {...rest}>
    {children}
  </Column>
)

export default FilterItem
