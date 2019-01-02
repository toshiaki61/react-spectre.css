import React from 'react'

import cx from 'classnames'

import {TilePartProps} from './interfaces'

const TileTitle = ({children, className}: TilePartProps) => (
  <p className={cx('tile-title', className)}>{children}</p>
)

export default TileTitle
