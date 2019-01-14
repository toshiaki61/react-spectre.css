import React, {FC} from 'react'

import cx from 'classnames'

import {attr} from '@utils/attr'
import {LinkHash} from '../../interfaces'

import {TabItemProps} from './interfaces'

const TabItem: FC<TabItemProps> = ({title, active, badge, onClick}) => {
  const badgeAttr = badge ? attr({badge: `${badge}`}) : {}
  return (
    <li className={cx('tab-item', {active})}>
      <a href={LinkHash} onClick={onClick} {...badgeAttr}>
        {title}
      </a>
    </li>
  )
}

export default TabItem
