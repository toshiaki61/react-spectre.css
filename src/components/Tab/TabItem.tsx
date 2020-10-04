import * as React from 'react'

import cx from 'clsx'

import {attr} from '../../utilities/attr'
import {LinkHash} from '../../interfaces'

import {TabItemProps} from './interfaces'

const TabItem: React.FC<TabItemProps> = ({title, active, badge, onClick}) => {
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
