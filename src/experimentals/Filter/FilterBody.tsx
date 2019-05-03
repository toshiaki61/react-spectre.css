import * as React from 'react'

import {Columns} from '../../layouts'

import {FilterBodyProps} from './interfaces'

const FilterBody: React.FC<FilterBodyProps> = ({children}) => (
  <Columns className="filter-body">{children}</Columns>
)

export default FilterBody
