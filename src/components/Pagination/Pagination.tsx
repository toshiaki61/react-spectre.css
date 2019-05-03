import * as React from 'react'

import {PaginationProps} from './interfaces'
import {hasPaginationChildren, hasPaginationTitle, pages} from './util'

import PaginationItem from './PaginationItem'
import PaginationTitleItem from './PaginationTitleItem'

function renderPagination(p: PaginationProps) {
  if (hasPaginationChildren(p)) {
    return p.children
  }
  const {current, onClick} = p
  if (hasPaginationTitle(p)) {
    const {title} = p
    return (
      <React.Fragment>
        <PaginationTitleItem
          title={title.prev.title}
          subtitle={title.prev.subtitle}
          current={current}
          value={current - 1}
          onClick={onClick}
        />
        <PaginationTitleItem
          title={title.next.title}
          subtitle={title.next.subtitle}
          current={current}
          value={current + 1}
          onClick={onClick}
        />
      </React.Fragment>
    )
  }
  const {label, total, each} = p
  const safeLabel = label ? label : {skip: null, previous: null, next: null}
  const list = pages(current, total, each, safeLabel.skip)
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}
const Pagination: React.FC<PaginationProps> = p => {
  return <ul className="pagination">{renderPagination(p)}</ul>
}
Pagination.defaultProps = {
  label: {previous: 'Previous', next: 'Next', skip: '...'},
  total: 1,
  current: 1,
  each: 1,
}

export default Pagination
