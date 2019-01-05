import React from 'react'

import cx from 'classnames'

import {attr} from '@utils/attr'
import {LinkHash} from '../../interfaces'

import {TabItemProps} from './interfaces'

const TabItem = ({title, active, badge, onClick}: TabItemProps) => {
  return (
    <li className={cx('tab-item', {active})}>
      <a href={LinkHash} onClick={onClick} {...attr({badge: `${badge}`})}>
        {title}
      </a>
    </li>
  )
}

export default TabItem
