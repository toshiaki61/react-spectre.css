import * as React from 'react'

import cx from 'clsx'

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
const Hero: React.FC<HeroProps> = p => (
  <div
    className={cx('hero', p.className, {[`hero-${p.size}`]: p.size})}
    style={p.style}
  >
    {renderHero(p)}
  </div>
)

export default Hero
