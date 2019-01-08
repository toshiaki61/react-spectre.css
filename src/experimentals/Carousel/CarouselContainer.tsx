import React, {FC} from 'react'

import {CarouselContainerProps} from './interfaces'

const CarouselContainer: FC<CarouselContainerProps> = ({children}) => (
  <div className="carousel-container">{children}</div>
)

export default CarouselContainer
