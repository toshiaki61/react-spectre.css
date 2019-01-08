import React, {FC} from 'react'

import {ParallaxPartProps} from './interfaces'

const ParallaxContent: FC<ParallaxPartProps> = ({children}) => (
  <div className="parallax-content">{children}</div>
)

export default ParallaxContent
