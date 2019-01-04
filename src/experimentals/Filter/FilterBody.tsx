import React from 'react'

import {Columns} from '@layouts/index'

import {FilterBodyProps} from './interfaces'

const FilterBody = ({children}: FilterBodyProps) => (
  <Columns className="filter-body">{children}</Columns>
)

export default FilterBody
