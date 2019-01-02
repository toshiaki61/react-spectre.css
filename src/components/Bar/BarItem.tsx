import React, {ReactElement} from 'react'

import {BarItemProps} from './interfaces'

import {attr} from '@utils/attr'

const BarItem = ({
  small,
  tooltip,
  content,
}: BarItemProps): ReactElement<BarItemProps> => {
  return (
    <div {...attr({className: 'bar-item', tooltip})}>
      {small ? null : content}
    </div>
  )
}
BarItem.defaultProps = {
  small: false,
  tooltip: '',
  content: '',
}

export default BarItem
