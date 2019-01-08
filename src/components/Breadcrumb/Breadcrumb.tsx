import React, {FC} from 'react'

import {BreadcrumbProps} from './interfaces'
import {hasBreadcrumbChildren} from './util'

import BreadcrumbItem from './BreadcrumbItem'

function renderBreadcrumb(p: BreadcrumbProps) {
  if (hasBreadcrumbChildren(p)) {
    return p.children
  }
  return p.items.map((item, i) => <BreadcrumbItem key={item.id} {...item} />)
}
const Breadcrumb: FC<BreadcrumbProps> = p => (
  <ul className="breadcrumb">{renderBreadcrumb(p)}</ul>
)

export default Breadcrumb
