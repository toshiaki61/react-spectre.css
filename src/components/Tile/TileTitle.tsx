import * as React from 'react'

import cx from 'clsx'

import {TilePartProps} from './interfaces'

const TileTitle: React.FC<TilePartProps> = ({children, className}) => (
  <p className={cx('tile-title', className)}>{children}</p>
)

export default TileTitle
