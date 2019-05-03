import * as React from 'react'

import cx from 'clsx'

import {LinkHash} from '../../interfaces'

import {PaginationTitleItemProps} from './interfaces'

const PaginationTitleItem: React.FC<PaginationTitleItemProps> = ({
  title,
  subtitle,
  current,
  value,
  onClick,
}) => {
  const handleLinkClick =
    // useCallback(
    (e: React.MouseEvent<any>) => onClick && onClick(e, value)
  // ,[value])
  return (
    <li
      className={cx('page-item', {
        'page-prev': current > value,
        'page-next': current < value,
      })}
    >
      <a href={LinkHash} onClick={handleLinkClick}>
        <div className="page-item-subtitle">{subtitle}</div>
        <div className="page-item-title h5">{title}</div>
      </a>
    </li>
  )
}

export default PaginationTitleItem
