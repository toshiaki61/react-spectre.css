import {MouseEvent, MouseEventHandler, ReactNode} from 'react'
import {BasePartProps} from 'src/interfaces'

export type DateLike = Date | string | number

export type MouseEventDateLikeHandler = (
  e: MouseEvent<any>,
  m: DateLike
) => void

export interface CalendarRange {
  start: string
  end: string
}

export type CalendarDataType = 'badge' | 'disabled' | 'today'

export interface CalendarData {
  date: string
  tooltip: string
  type?: CalendarDataType
}
export type CalendarHeaderProps = Partial<BasePartProps>
export type CalendarNavProps = Partial<BasePartProps>
export type CalendarContainerProps = Partial<BasePartProps>
export type CalendarBodyProps = Partial<BasePartProps>
export type CalendarDateProps = Partial<BasePartProps>

export interface CalendarNavDetail {
  onClick: MouseEventHandler
  children: ReactNode
}
export interface CalendarNav {
  prev: CalendarNavDetail
  current: CalendarNavDetail
  next: CalendarNavDetail
}
export interface CalendarOptions {
  data: CalendarData[]
  range: CalendarRange[]
}
export interface CalendarProps {
  children?: ReactNode
  lg?: boolean
  nav?: CalendarNav
  weekdays?: string[]
  current: DateLike
  // start: DateLike
  // end: DateLike
  options?: CalendarOptions
  formatDate?: (date: DateLike) => string
  onDateClick?: MouseEventDateLikeHandler
}

export interface CalendarDateItemProps {
  children: ReactNode
  active?: boolean
  disabled?: boolean
  badge?: boolean
  today?: boolean
  onClick: MouseEventHandler
}
