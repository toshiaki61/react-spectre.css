import React, {FC} from 'react'

import {FilterNavProps} from './interfaces'

const FilterNav: FC<FilterNavProps> = ({children}) => (
  <div className="filter-nav">{children}</div>
)

export default FilterNav
