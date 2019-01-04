import {ReactNode} from 'react'

import {BasePartProps} from '../../interfaces'

export interface TimelineProps {
  children?: ReactNode
  timelines?: TimelineData[]
}

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
  content: ReactNode
}
