import {ReactNode} from 'react'

import {SliderProps} from '../Slider'

export interface Viewer360Props {
  children?: ReactNode
  className?: string
  slider?: SliderProps
  image?: string
}

export type ViewerSliderProps = SliderProps

export interface ViewerImageProps {
  image: string
}
