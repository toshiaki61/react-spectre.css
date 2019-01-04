import React, {ChangeEvent, Fragment, ReactElement, useCallback} from 'react'

import {
  Card,
  CardHeader,
  CardSubtitle,
  CardTitle,
  Chip,
} from '@components/index'

import {FilterProps} from './interfaces'

import FilterBody from './FilterBody'
import FilterItem from './FilterItem'
import FilterNav from './FilterNav'
import FilterTag from './FilterTag'

const Filter = ({
  children,
  tags,
  data,
  activeId: active,
  onChange,
}: FilterProps): ReactElement<FilterProps> => (
  <div className="filter">
    {children
      ? children
      : tags && (
          <Fragment>
            {Object.keys(tags).map(key => {
              const handleChange = useCallback(
                (e: ChangeEvent<any>) => onChange(e, key),
                [key]
              )
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
        )}
  </div>
)
export default Filter
