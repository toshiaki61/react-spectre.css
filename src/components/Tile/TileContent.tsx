import * as React from 'react'

import cx from 'clsx'

import {TilePartProps} from './interfaces'

const TileContent: React.FC<TilePartProps> = ({children, className}) => (
  <div className={cx('tile-content', className)}>{children}</div>
)

export default TileContent
