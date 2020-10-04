import * as React from 'react'

import {ParallaxPartProps} from './interfaces'

const ParallaxBack: React.FC<ParallaxPartProps> = ({children}) => (
  <div className="parallax-back">{children}</div>
)

export default ParallaxBack
