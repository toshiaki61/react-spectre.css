import * as React from 'react'

import cx from 'clsx'

import {attr} from '../../utilities/attr'
import {LinkHash} from '../../interfaces'
import {StepItemProps} from './interfaces'

const StepItem: React.FC<StepItemProps> = ({children, active, tooltip}) => (
  <li className={cx('step-item', {active})}>
    <a href={LinkHash} {...attr({tooltip})}>
      {children}
    </a>
  </li>
)

export default StepItem
