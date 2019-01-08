import React, {FC} from 'react'

import {ParallaxPartProps} from './interfaces'

const ParallaxBack: FC<ParallaxPartProps> = ({children}) => (
  <div className="parallax-back">{children}</div>
)

export default ParallaxBack
