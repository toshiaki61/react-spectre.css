import React, {SFC} from 'react'

import cx from 'classnames'

import {HeroBodyProps} from './interfaces'

const HeroBody: SFC<HeroBodyProps> = ({children, className}) => (
  <div className={cx('hero-body', className)}>{children}</div>
)

export default HeroBody
