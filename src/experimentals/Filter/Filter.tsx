import React, {ChangeEvent, Fragment, SFC, useCallback} from 'react'

import {
  Card,
  CardHeader,
  CardSubtitle,
  CardTitle,
  Chip,
} from '@components/index'

import {FilterProps} from './interfaces'
import {hasFilterChildren} from './util'

import FilterBody from './FilterBody'
import FilterItem from './FilterItem'
import FilterNav from './FilterNav'
import FilterTag from './FilterTag'

function renderFilter(p: FilterProps) {
  if (hasFilterChildren(p)) {
    return p.children
  }
  const {tags, data, activeId: active, onChange} = p
  return (
    <Fragment>
      {Object.keys(tags).map(key => {
        const handleChange =
          // useCallback(
          (e: ChangeEvent<any>) => onChange(e, key)
        // ,[key])
        return (
          <FilterTag
            key={`${key}_input`}
            id={key}
            checked={key === active}
            onChange={handleChange}
          />
        )
      })}

      <FilterNav>
        {Object.keys(tags).map(key => (
          <Chip key={`${key}_nav`} htmlFor={key}>
            {tags[key]}
          </Chip>
        ))}
      </FilterNav>
      <FilterBody>
        {data &&
          data.map(({tag, title, subtitle}, i) => {
            const key = `card_${i}`
            return (
              <FilterItem key={key} data-tag={tag}>
                <Card style={{marginBottom: '0.4rem'}}>
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>{subtitle}</CardSubtitle>
                  </CardHeader>
                </Card>
              </FilterItem>
            )
          })}
      </FilterBody>
    </Fragment>
  )
}
const Filter: SFC<FilterProps> = p => (
  <div className="filter">{renderFilter(p)}</div>
)
export default Filter
