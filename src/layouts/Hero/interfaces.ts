import {ReactNode} from 'react'

export type HeroSize = 'lg' | 'sm'

export interface HeroProps {
  children?: ReactNode
  title?: ReactNode
  content?: ReactNode
  size?: HeroSize
  className?: string
}

export interface HeroBodyProps {
  children?: ReactNode
  className?: string
}
