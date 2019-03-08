import React, {FC} from 'react'

import {BarItemProps} from './interfaces'

import {attr} from 'utilities/attr'

const BarItem: FC<BarItemProps> = ({small, tooltip, content, ...rest}) => (
  <div {...attr({className: 'bar-item', tooltip})} {...rest}>
    {small ? null : content}
  </div>
)

BarItem.defaultProps = {
  small: false,
  tooltip: '',
  content: '',
}

export default BarItem
