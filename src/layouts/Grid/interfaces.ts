import {ReactNode} from 'react'

export type ContainerGridSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export interface ContainerProps {
  children: ReactNode
  className?: string
  size?: ContainerGridSize
}
