import {ReactNode} from 'react'

import {BasePartProps} from '../../interfaces'

export interface TimelineAttrProps {
  timelines: TimelineData[]
}
export interface TimelineChildrenProps {
  children: ReactNode
}
export type TimelineProps = TimelineAttrProps | TimelineChildrenProps

export interface TimelineItemProps {
  id: string
  children: ReactNode
}

export type TimelinePartProps = Partial<BasePartProps>

export interface TimelineIconProps {
  children: ReactNode
  id: string
  tooltip: string
  lg: boolean
}

export interface TimelineData {
  title: string
  action?: ReactNode
  content: ReactNode
}
