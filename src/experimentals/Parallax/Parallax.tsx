import React, {Fragment, ReactElement} from 'react'

import {ParallaxProps} from './interfaces'

import ParallaxBack from './ParallaxBack'
import ParallaxBottomLeft from './ParallaxBottomLeft'
import ParallaxBottomRight from './ParallaxBottomRight'
import ParallaxContent from './ParallaxContent'
import ParallaxFront from './ParallaxFront'
import ParallaxTopLeft from './ParallaxTopLeft'
import ParallaxTopRight from './ParallaxTopRight'

const Parallax = ({
  children,
  src,
  alt,
  title,
}: ParallaxProps): ReactElement<ParallaxProps> => (
  <div className="parallax">
    {children ? (
      children
    ) : (
      <Fragment>
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
      </Fragment>
    )}
  </div>
)

export default Parallax
