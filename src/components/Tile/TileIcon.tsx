import * as React from 'react'

import cx from 'clsx'

import {TilePartProps} from './interfaces'

const TileIcon: React.FC<TilePartProps> = ({children, className}) => (
  <div className={cx('tile-icon', className)}>{children}</div>
)

export default TileIcon
