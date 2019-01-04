import React from 'react'

import cx from 'classnames'

import {HeroBodyProps} from './interfaces'

const HeroBody = ({children, className}: HeroBodyProps) => (
  <div className={cx('hero-body', className)}>{children}</div>
)

export default HeroBody
