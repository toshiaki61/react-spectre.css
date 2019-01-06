import React, {MouseEvent, SFC, useCallback} from 'react'

import cx from 'classnames'

import {LinkHash} from '../../interfaces'

import {PaginationTitleItemProps} from './interfaces'

const PaginationTitleItem: SFC<PaginationTitleItemProps> = ({
  title,
  subtitle,
  current,
  value,
  onClick,
}) => {
  const handleLinkClick =
    // useCallback(
    (e: MouseEvent<any>) => onClick && onClick(e, value)
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
