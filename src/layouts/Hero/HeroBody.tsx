import * as React from 'react'

import cx from 'clsx'

import {HeroBodyProps} from './interfaces'

const HeroBody: React.FC<HeroBodyProps> = ({children, className}) => (
  <div className={cx('hero-body', className)}>{children}</div>
)

export default HeroBody
