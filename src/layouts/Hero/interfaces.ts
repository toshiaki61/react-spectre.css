import {ReactNode} from 'react'

export type HeroSizeType = 'lg' | 'sm'

export interface HeroProps {
  children?: ReactNode
  title?: ReactNode
  content?: ReactNode
  size?: HeroSizeType
  className?: string
}

export interface HeroBodyProps {
  children?: ReactNode
  className?: string
}
