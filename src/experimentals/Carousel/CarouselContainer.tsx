import React from 'react'

import {CarouselContainerProps} from './interfaces'

const CarouselContainer = ({children}: CarouselContainerProps) => (
  <div className="carousel-container">{children}</div>
)

export default CarouselContainer
