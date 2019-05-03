import * as React from 'react'

import {ParallaxPartProps} from './interfaces'

const ParallaxContent: React.FC<ParallaxPartProps> = ({children}) => (
  <div className="parallax-content">{children}</div>
)

export default ParallaxContent
