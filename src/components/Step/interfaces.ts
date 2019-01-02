import {ReactNode} from 'react'

export interface StepItemProps {
  id: string
  children: ReactNode
  tooltip: string
  active?: boolean
}

export interface StepProps {
  children?: ReactNode
  items?: StepItemProps[]
  activeId?: string
}
