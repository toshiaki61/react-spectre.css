import {ReactNode} from 'react'

import {StyleProps} from '../../interfaces'

import {SliderProps} from '../Slider'

export interface Viewer360AttrProps extends Partial<StyleProps> {
  slider: SliderProps
  image: string
}
export interface Viewer360ChildrenProps extends Partial<StyleProps> {
  children: ReactNode
}
export type Viewer360Props = Viewer360AttrProps | Viewer360ChildrenProps

export type ViewerSliderProps = SliderProps

export interface ViewerImageProps {
  image: string
}
