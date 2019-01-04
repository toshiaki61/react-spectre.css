import {ReactNode} from 'react'

import {BasePartProps} from '../../interfaces'

export interface ParallaxProps {
  children?: ReactNode
  src?: string
  alt?: string
  title?: string
}

export type ParallaxPartProps = Partial<BasePartProps>
