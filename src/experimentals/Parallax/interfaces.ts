import {ReactNode} from 'react'

import {BasePartProps} from '../../interfaces'

export interface ParallaxAttrProps {
  src: string
  alt?: string
  title?: string
}
export interface ParallaxChildrenProps {
  children: ReactNode
}
export type ParallaxProps = ParallaxAttrProps | ParallaxChildrenProps

export type ParallaxPartProps = Partial<BasePartProps>
