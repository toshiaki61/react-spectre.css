import React, {SFC} from 'react'

import {ParallaxPartProps} from './interfaces'

const ParallaxFront: SFC<ParallaxPartProps> = ({children}) => (
  <div className="parallax-front">{children}</div>
)

export default ParallaxFront
