import React, {SFC} from 'react'

import cx from 'classnames'

import {TilePartProps} from './interfaces'

const TileIcon: SFC<TilePartProps> = ({children, className}) => (
  <div className={cx('tile-icon', className)}>{children}</div>
)

export default TileIcon
