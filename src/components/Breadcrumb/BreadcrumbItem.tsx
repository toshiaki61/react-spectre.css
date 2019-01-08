import React, {FC} from 'react'

import {BreadcrumbItemProps} from './interfaces'

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
  link,
  children,
  onClick,
}) => (
  <li className="breadcrumb-item">
    <a href={link} onClick={onClick}>
      {children}
    </a>
  </li>
)
BreadcrumbItem.defaultProps = {
  link: '#',
}

export default BreadcrumbItem
