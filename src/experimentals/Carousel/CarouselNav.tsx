import React from 'react'

import {CarouselNavProps} from './interfaces'

const CarouselNav = ({children}: CarouselNavProps) => (
  <div className="carousel-nav">{children}</div>
)

export default CarouselNav
