import React, {FC} from 'react'

import cx from 'classnames'

import {TilePartProps} from './interfaces'

const TileIcon: FC<TilePartProps> = ({children, className}) => (
  <div className={cx('tile-icon', className)}>{children}</div>
)

export default TileIcon
