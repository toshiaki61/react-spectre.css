import React, {FC} from 'react'

import {Columns} from '@layouts/index'

import {FilterBodyProps} from './interfaces'

const FilterBody: FC<FilterBodyProps> = ({children}) => (
  <Columns className="filter-body">{children}</Columns>
)

export default FilterBody
