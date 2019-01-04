import React from 'react'

import {FilterTagProps} from './interfaces'

const FilterTag = ({id, checked, onChange}: FilterTagProps) => (
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
