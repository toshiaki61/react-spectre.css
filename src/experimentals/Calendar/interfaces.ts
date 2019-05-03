import * as React from 'react'
import {BasePartProps} from '../../interfaces'

export type DateLike = Date | string | number

export type MouseEventDateLikeHandler = (
  e: React.MouseEvent<any>,
  m: DateLike
) => void

export interface CalendarRange {
  start: DateLike
  end: DateLike
}

export type CalendarDataType = 'badge' | 'disabled' | 'today'

export interface CalendarData {
  date: DateLike
  tooltip: string
  type?: CalendarDataType
}
export type CalendarHeaderProps = Partial<BasePartProps>
export type CalendarNavProps = Partial<BasePartProps>
export type CalendarContainerProps = Partial<BasePartProps>
export type CalendarBodyProps = Partial<BasePartProps>
export type CalendarDateProps = Partial<BasePartProps>

export interface CalendarNavDetail {
  onClick: React.MouseEventHandler
  children?: React.ReactNode
}
export interface CalendarNav {
  current: string
  prev: CalendarNavDetail
  next: CalendarNavDetail
}
export interface CalendarOptions {
  data: CalendarData[]
  range: CalendarRange[]
}

export interface CalendarDateItemProps {
  children: React.ReactNode
  active?: boolean
  disabled?: boolean
  badge?: boolean
  today?: boolean
  onClick: React.MouseEventHandler
}

export interface CalendarBaseProps {
  lg?: boolean
}
export interface CalendarAttrProps extends CalendarBaseProps {
  nav: CalendarNav
  weekdays: string[]
  /** Date | string | number */
  current: DateLike
  options?: CalendarOptions
  formatDate?: (date: DateLike) => string
  onDateClick?: MouseEventDateLikeHandler
}

export interface CalendarChildrenProps extends CalendarBaseProps {
  children: React.ReactNode
}

export type CalendarProps = CalendarAttrProps | CalendarChildrenProps
