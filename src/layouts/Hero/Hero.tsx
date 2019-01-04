import React from 'react'

import cx from 'classnames'

import {HeroProps} from './interfaces'

import HeroBody from './HeroBody'

const Hero = ({children, className, size, title, content}: HeroProps) => (
  <div className={cx('hero', className, {[`hero-${size}`]: size})}>
    {children ? (
      children
    ) : (
      <HeroBody>
        <h1>{title}</h1>
        <p>{content}</p>
      </HeroBody>
    )}
  </div>
)

export default Hero
