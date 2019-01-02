import React from 'react'

import cx from 'classnames'

import {attr} from '@utils/attr'

import {LinkHash} from '../../interfaces'

import {StepItemProps} from './interfaces'

const StepItem = ({children, active, tooltip}: StepItemProps) => (
  <li className={cx('step-item', {active})}>
    <a href={LinkHash} {...attr({tooltip})}>
      {children}
    </a>
  </li>
)

export default StepItem
