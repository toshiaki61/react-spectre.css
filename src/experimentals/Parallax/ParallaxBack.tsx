import React from 'react'

import {ParallaxPartProps} from './interfaces'

const ParallaxBack = ({children}: ParallaxPartProps) => (
  <div className="parallax-back">{children}</div>
)

export default ParallaxBack
