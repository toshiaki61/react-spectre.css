import React, {SFC} from 'react'

import {CarouselContainerProps} from './interfaces'

const CarouselContainer: SFC<CarouselContainerProps> = ({children}) => (
  <div className="carousel-container">{children}</div>
)

export default CarouselContainer
