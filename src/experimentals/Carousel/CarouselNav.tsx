import * as React from 'react'

import {CarouselNavProps} from './interfaces'

const CarouselNav: React.FC<CarouselNavProps> = ({children}) => (
  <div className="carousel-nav">{children}</div>
)

export default CarouselNav
