import * as React from 'react'

import {LinkHash} from '../../interfaces'
import {BreadcrumbItemProps} from './interfaces'

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  link,
  children,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent<any>) => {
    e.preventDefault()
    if (onClick) {
      onClick(e)
    }
  }
  return (
    <li className="breadcrumb-item">
      <a href={link || LinkHash} onClick={handleClick}>
        {children}
      </a>
    </li>
  )
}
BreadcrumbItem.defaultProps = {
  link: '#',
}

export default BreadcrumbItem
