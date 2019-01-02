import React, {MouseEvent, ReactElement, useCallback} from 'react'

import cx from 'classnames'

import {LinkHash} from '../../interfaces'

import {PaginationTitleProps} from './interfaces'

const PaginationTitle = ({
  title,
  subtitle,
  current,
  value,
  onClick,
}: PaginationTitleProps): ReactElement<PaginationTitleProps> => {
  const classes = cx('page-item', {
    'page-prev': current > value,
    'page-next': current < value,
  })
  const handleLinkClick = useCallback(
    (e: MouseEvent<any>) => onClick && onClick(e, value),
    [value]
  )
  return (
    <li className={classes}>
      <a href={LinkHash} onClick={handleLinkClick}>
        <div className="page-item-subtitle">{subtitle}</div>
        <div className="page-item-title h5">{title}</div>
      </a>
    </li>
  )
}

export default PaginationTitle
