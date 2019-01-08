import React, {FC} from 'react'

import cx from 'classnames'

import {TilePartProps} from './interfaces'

const TileSubtitle: FC<TilePartProps> = ({children, className}) => (
  <p className={cx('tile-subtitle', className)}>{children}</p>
)

export default TileSubtitle
