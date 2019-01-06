import React, {SFC} from 'react'

import cx from 'classnames'

import {TilePartProps} from './interfaces'

const TileAction: SFC<TilePartProps> = ({children, className}) => (
  <div className={cx('tile-action', className)}>{children}</div>
)

export default TileAction
