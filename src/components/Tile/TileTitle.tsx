import React, {FC} from 'react'

import cx from 'classnames'

import {TilePartProps} from './interfaces'

const TileTitle: FC<TilePartProps> = ({children, className}) => (
  <p className={cx('tile-title', className)}>{children}</p>
)

export default TileTitle
