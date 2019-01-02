import React, {ReactElement} from 'react'

import {BreadcrumbProps} from './interfaces'

import BreadcrumbItem from './BreadcrumbItem'

const Breadcrumb = ({
  items,
  children,
}: BreadcrumbProps): ReactElement<BreadcrumbProps> => (
  <ul className="breadcrumb">
    {children
      ? children
      : items &&
        items.map((item, i) => <BreadcrumbItem key={item.id} {...item} />)}
  </ul>
)

export default Breadcrumb
