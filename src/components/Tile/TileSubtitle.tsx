import React from 'react'

import cx from 'classnames'

import {TilePartProps} from './interfaces'

const TileSubtitle = ({children, className}: TilePartProps) => (
  <p className={cx('tile-subtitle', className)}>{children}</p>
)

export default TileSubtitle
