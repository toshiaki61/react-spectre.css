import React, {SFC} from 'react'

import {BarItemProps} from './interfaces'

import {attr} from '@utils/attr'

const BarItem: SFC<BarItemProps> = ({small, tooltip, content}) => (
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
