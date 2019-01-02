import React from 'react'

import cx from 'classnames'

import {TilePartProps} from './interfaces'

const TileAction = ({children, className}: TilePartProps) => (
  <div className={cx('tile-action', className)}>{children}</div>
)

export default TileAction
