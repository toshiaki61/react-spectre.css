import React, {ReactElement} from 'react'

import {BreadcrumbItemProps} from './interfaces'

const BreadcrumbItem = ({
  link,
  children,
  onClick,
}: BreadcrumbItemProps): ReactElement<BreadcrumbItemProps> => (
  <li className="breadcrumb-item">
    <a href={link} onClick={onClick}>
      {children}
    </a>
  </li>
)
BreadcrumbItem.defaultProps = {
  link: '#',
  content: '',
}

export default BreadcrumbItem
