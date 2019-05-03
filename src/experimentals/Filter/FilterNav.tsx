import * as React from 'react'

import {FilterNavProps} from './interfaces'

const FilterNav: React.FC<FilterNavProps> = ({children}) => (
  <div className="filter-nav">{children}</div>
)

export default FilterNav
