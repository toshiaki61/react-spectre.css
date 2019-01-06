import React, {SFC} from 'react'

import {ParallaxPartProps} from './interfaces'

const ParallaxContent: SFC<ParallaxPartProps> = ({children}) => (
  <div className="parallax-content">{children}</div>
)

export default ParallaxContent
