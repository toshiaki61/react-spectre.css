import {CSSProperties, ReactNode} from 'react'

import {BasePartProps} from '../../interfaces'

export interface ComparisonImageProps {
  src: string
  alt?: string
  className?: string
  style?: CSSProperties
}

export type ComparisonBeforeProps = Partial<BasePartProps>

export type ComparisonAfterProps = Partial<BasePartProps>

export type ComparisonLabelProps = Partial<BasePartProps>

export interface ComparisonSliderAttrProps {
  before: ComparisonImageProps
  after: ComparisonImageProps
}
export interface ComparisonSliderChildrenProps {
  children: ReactNode
}
export type ComparisonSliderProps =
  | ComparisonSliderAttrProps
  | ComparisonSliderChildrenProps
