import React, {ReactElement} from 'react'

import {PaginationProps} from './interfaces'
import {pages} from './util'

import PaginationItem from './PaginationItem'
import PaginationTitle from './PaginationTitle'

const Pagination = ({
  label,
  current,
  total,
  each,
  title,
  onClick,
  children,
}: PaginationProps): ReactElement<PaginationProps> => {
  if (children) {
    return <ul className="pagination">{children}</ul>
  }
  if (title) {
    return (
      <ul className="pagination">
        <PaginationTitle
          title={title.prev.title}
          subtitle={title.prev.subtitle}
          current={current}
          value={current - 1}
          onClick={onClick}
        />
        <PaginationTitle
          title={title.next.title}
          subtitle={title.next.subtitle}
          current={current}
          value={current + 1}
          onClick={onClick}
        />
      </ul>
    )
  }
  const safeLabel = label ? label : {skip: null, previous: null, next: null}
  const list = pages(current, total, each, safeLabel.skip)
  return (
    <ul className="pagination">
      <PaginationItem
        current={current}
        label={safeLabel.previous}
        disabled={current === 1}
        value={current - 1}
        onClick={onClick}
      />
      {list.map((row, i) => {
        const key = `paging-${i}`
        return (
          <PaginationItem
            key={key}
            {...row}
            current={current}
            disabled={!row.value}
            onClick={onClick}
          />
        )
      })}
      <PaginationItem
        current={current}
        label={safeLabel.next}
        disabled={current === total}
        value={current + 1}
        onClick={onClick}
      />
    </ul>
  )
}
Pagination.defaultProps = {
  label: {previous: 'Previous', next: 'Next', skip: '...'},
  total: 1,
  current: 1,
  each: 1,
  title: undefined,
}

export default Pagination
