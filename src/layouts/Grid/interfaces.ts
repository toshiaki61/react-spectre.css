import {ReactNode} from 'react'

export type ContainerGridSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ContainerProps {
  children: ReactNode
  className?: string
  size?: ContainerGridSizeType
}
