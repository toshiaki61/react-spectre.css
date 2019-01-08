import React, {FC} from 'react'

import {ParallaxPartProps} from './interfaces'

const ParallaxFront: FC<ParallaxPartProps> = ({children}) => (
  <div className="parallax-front">{children}</div>
)

export default ParallaxFront
