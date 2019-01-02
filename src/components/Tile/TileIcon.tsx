import React from 'react'

import cx from 'classnames'

import {TilePartProps} from './interfaces'

const TileIcon = ({children, className}: TilePartProps) => (
  <div className={cx('tile-icon', className)}>{children}</div>
)

export default TileIcon
