import React, {FC} from 'react'

import {BarItemProps} from './interfaces'

import {attr} from '@utils/attr'

const BarItem: FC<BarItemProps> = ({small, tooltip, content}) => (
  <div {...attr({className: 'bar-item', tooltip})}>
    {small ? null : content}
  </div>
)

BarItem.defaultProps = {
  small: false,
  tooltip: '',
  content: '',
}

export default BarItem
