import React, {SFC} from 'react'

import {CarouselNavProps} from './interfaces'

const CarouselNav: SFC<CarouselNavProps> = ({children}) => (
  <div className="carousel-nav">{children}</div>
)

export default CarouselNav
