import React from 'react'

import {CarouselLocatorProps} from './interfaces'

const CarouselLocator = (props: CarouselLocatorProps) => (
  <input
    name="carousel-radio"
    className="carousel-locator"
    type="radio"
    hidden
    {...props}
  />
)

export default CarouselLocator
