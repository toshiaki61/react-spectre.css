import React, {SFC} from 'react'

import cx from 'classnames'

import {HeroProps} from './interfaces'
import {hasHeroChildren} from './util'

import HeroBody from './HeroBody'

function renderHero(p: HeroProps) {
  if (hasHeroChildren(p)) {
    return p.children
  }
  const {title, content} = p
  return (
    <HeroBody>
      <h1>{title}</h1>
      <p>{content}</p>
    </HeroBody>
  )
}
const Hero: SFC<HeroProps> = p => (
  <div className={cx('hero', p.className, {[`hero-${p.size}`]: p.size})}>
    {renderHero(p)}
  </div>
)

export default Hero
