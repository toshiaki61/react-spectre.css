import * as React from 'react'

export interface StepItemProps {
  id: string
  children: React.ReactNode
  tooltip: string
  active?: boolean
}

export interface StepAttrProps {
  items: StepItemProps[]
  activeId?: string
}
export interface StepChildrenProps {
  children: React.ReactNode
}

export type StepProps = StepAttrProps | StepChildrenProps
