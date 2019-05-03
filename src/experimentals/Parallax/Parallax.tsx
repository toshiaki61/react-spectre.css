import * as React from 'react'

import {ParallaxProps} from './interfaces'
import {hasParallaxChildren} from './util'

import ParallaxBack from './ParallaxBack'
import ParallaxBottomLeft from './ParallaxBottomLeft'
import ParallaxBottomRight from './ParallaxBottomRight'
import ParallaxContent from './ParallaxContent'
import ParallaxFront from './ParallaxFront'
import ParallaxTopLeft from './ParallaxTopLeft'
import ParallaxTopRight from './ParallaxTopRight'

function renderParallax(p: ParallaxProps) {
  if (hasParallaxChildren(p)) {
    return p.children
  }
  const {src, alt, title} = p
  return (
    <React.Fragment>
      <ParallaxTopLeft />
      <ParallaxTopRight />
      <ParallaxBottomLeft />
      <ParallaxBottomRight />
      <ParallaxContent>
        <ParallaxFront>
          <h2>{title}</h2>
        </ParallaxFront>
        <ParallaxBack>
          <img
            src={src}
            className="img-responsive rounded"
            alt={alt || title}
          />
        </ParallaxBack>
      </ParallaxContent>
    </React.Fragment>
  )
}
const Parallax: React.FC<ParallaxProps> = p => (
  <div className="parallax">{renderParallax(p)}</div>
)

export default Parallax
