import React from 'react'

import cx from 'classnames'

import {TilePartProps} from './interfaces'

const TileContent = ({children, className}: TilePartProps) => (
  <div className={cx('tile-content', className)}>{children}</div>
)

export default TileContent
