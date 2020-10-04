import * as React from 'react'

import {ParallaxPartProps} from './interfaces'

const ParallaxFront: React.FC<ParallaxPartProps> = ({children}) => (
  <div className="parallax-front">{children}</div>
)

export default ParallaxFront
