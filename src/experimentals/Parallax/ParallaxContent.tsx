import React from 'react'

import {ParallaxPartProps} from './interfaces'

const ParallaxContent = ({children}: ParallaxPartProps) => (
  <div className="parallax-content">{children}</div>
)

export default ParallaxContent
