import React, {SFC} from 'react'

import cx from 'classnames'

import {TilePartProps} from './interfaces'

const TileTitle: SFC<TilePartProps> = ({children, className}) => (
  <p className={cx('tile-title', className)}>{children}</p>
)

export default TileTitle
