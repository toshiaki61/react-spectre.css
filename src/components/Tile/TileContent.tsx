import React, {SFC} from 'react'

import cx from 'classnames'

import {TilePartProps} from './interfaces'

const TileContent: SFC<TilePartProps> = ({children, className}) => (
  <div className={cx('tile-content', className)}>{children}</div>
)

export default TileContent
