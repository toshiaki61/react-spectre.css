import React, {FC} from 'react'

import cx from 'classnames'

import {HeroBodyProps} from './interfaces'

const HeroBody: FC<HeroBodyProps> = ({children, className}) => (
  <div className={cx('hero-body', className)}>{children}</div>
)

export default HeroBody
