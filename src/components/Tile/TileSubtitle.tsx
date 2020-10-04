import * as React from 'react'

import cx from 'clsx'

import {TilePartProps} from './interfaces'

const TileSubtitle: React.FC<TilePartProps> = ({children, className}) => (
  <p className={cx('tile-subtitle', className)}>{children}</p>
)

export default TileSubtitle
