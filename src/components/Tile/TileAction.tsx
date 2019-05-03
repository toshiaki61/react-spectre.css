import * as React from 'react'

import cx from 'clsx'

import {TilePartProps} from './interfaces'

const TileAction: React.FC<TilePartProps> = ({children, className}) => (
  <div className={cx('tile-action', className)}>{children}</div>
)

export default TileAction
