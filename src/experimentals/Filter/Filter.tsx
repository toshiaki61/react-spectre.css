import React, {ChangeEvent, FC, Fragment, useCallback} from 'react'

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
  const {tags, data, activeId, onChange} = p
  return (
    <Fragment>
      {Object.keys(tags).map((key, i) => {
        const handleChange =
          // useCallback(
          (e: ChangeEvent<any>) => onChange(e, key)
        // ,[key])
        const checked = activeId ? activeId === key : i === 0
        return (
          <FilterTag
            key={`${key}_input`}
            id={key}
            checked={checked}
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
          data.map(({tag, title, subtitle, style}, i) => {
            const key = `card_${i}`
            return (
              <FilterItem key={key} data-tag={tag} style={{padding: '0.4rem'}}>
                <Card style={{...style, marginBottom: '0.4rem'}}>
                  <CardHeader>
                    <CardTitle className="text-bold">{title}</CardTitle>
                    <CardSubtitle className="text-gray">
                      {subtitle}
                    </CardSubtitle>
                  </CardHeader>
                </Card>
              </FilterItem>
            )
          })}
      </FilterBody>
    </Fragment>
  )
}
const Filter: FC<FilterProps> = p => (
  <div className="filter">{renderFilter(p)}</div>
)
export default Filter
