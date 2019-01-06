import React, {SFC} from 'react'

import {Columns} from '@layouts/index'

import {FilterBodyProps} from './interfaces'

const FilterBody: SFC<FilterBodyProps> = ({children}) => (
  <Columns className="filter-body">{children}</Columns>
)

export default FilterBody
