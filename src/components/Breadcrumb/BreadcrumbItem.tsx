import React, {FC} from 'react'

import {LinkHash} from '../../interfaces'
import {BreadcrumbItemProps} from './interfaces'

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({link, children, onClick}) => (
  <li className="breadcrumb-item">
    <a href={link || LinkHash} onClick={onClick}>
      {children}
    </a>
  </li>
)
BreadcrumbItem.defaultProps = {
  link: '#',
}

export default BreadcrumbItem
