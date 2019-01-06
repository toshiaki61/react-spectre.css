import {ReactNode} from 'react'

export interface StepItemProps {
  id: string
  children: ReactNode
  tooltip: string
  active?: boolean
}

export interface StepAttrProps {
  items: StepItemProps[]
  activeId?: string
}
export interface StepChildrenProps {
  children: ReactNode
}

export type StepProps = StepAttrProps | StepChildrenProps
