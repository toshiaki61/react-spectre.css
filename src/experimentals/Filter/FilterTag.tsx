import * as React from 'react'

import {FilterTagProps} from './interfaces'

const FilterTag: React.FC<FilterTagProps> = ({id, checked, onChange}) => (
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
