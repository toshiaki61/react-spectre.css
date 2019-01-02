import React, {MouseEvent, ReactElement, useCallback} from 'react'

import cx from 'classnames'

import {LinkHash} from '../../interfaces'

import {PaginationItemProps} from './interfaces'

const PaginationItem = ({
  current,
  value,
  label,
  disabled,
  onClick,
}: PaginationItemProps): ReactElement<PaginationItemProps> => {
  const classes = cx('page-item', {
    disabled,
    active: value === current,
  })
  const linkProp: {tabIndex?: number} = {}
  if (disabled) {
    linkProp.tabIndex = -1
  }
  const handleLinkClick = useCallback(
    (e: MouseEvent<any>) => onClick && onClick(e, value),
    [value]
  )
  return (
    <li className={classes}>
      <a href={LinkHash} {...linkProp} onClick={handleLinkClick}>
        {label}
      </a>
    </li>
  )
}
PaginationItem.defaultProps = {
  disabled: false,
}

export default PaginationItem
