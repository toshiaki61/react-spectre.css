import React, {SFC} from 'react'

import {FilterTagProps} from './interfaces'

const FilterTag: SFC<FilterTagProps> = ({id, checked, onChange}) => (
  <input
    className="filter-tag"
    name="filter-radio"
    type="radio"
    hidden
    id={id}
    checked={checked}
    onChange={onChange}
  />
)

export default FilterTag
