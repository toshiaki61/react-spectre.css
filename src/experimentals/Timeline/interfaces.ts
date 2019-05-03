import * as React from 'react'

import {BasePartProps} from '../../interfaces'

export interface TimelineAttrProps {
  timelines: TimelineData[]
}
export interface TimelineChildrenProps {
  children: React.ReactNode
}
export type TimelineProps = TimelineAttrProps | TimelineChildrenProps

export interface TimelineItemProps {
  id: string
  children: React.ReactNode
}

export type TimelinePartProps = Partial<BasePartProps>

export interface TimelineIconProps {
  children: React.ReactNode
  id: string
  tooltip: string
  lg: boolean
}

export interface TimelineData {
  title: string
  action?: React.ReactNode
  content: React.ReactNode | React.ReactNode[]
}
