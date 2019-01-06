import React, {SFC} from 'react'

import {ParallaxPartProps} from './interfaces'

const ParallaxBack: SFC<ParallaxPartProps> = ({children}) => (
  <div className="parallax-back">{children}</div>
)

export default ParallaxBack
