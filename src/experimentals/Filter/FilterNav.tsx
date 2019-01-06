import React, {SFC} from 'react'

import {FilterNavProps} from './interfaces'

const FilterNav: SFC<FilterNavProps> = ({children}) => (
  <div className="filter-nav">{children}</div>
)

export default FilterNav
