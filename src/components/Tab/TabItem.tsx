import React, {SFC} from 'react'

import cx from 'classnames'

import {attr} from '@utils/attr'
import {LinkHash} from '../../interfaces'

import {TabItemProps} from './interfaces'

const TabItem: SFC<TabItemProps> = ({title, active, badge, onClick}) => (
  <li className={cx('tab-item', {active})}>
    <a href={LinkHash} onClick={onClick} {...attr({badge: `${badge}`})}>
      {title}
    </a>
  </li>
)

export default TabItem
