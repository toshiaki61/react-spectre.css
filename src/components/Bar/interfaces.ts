import * as React from 'react'

export interface BarItemProps {
  small?: boolean
  tooltip?: string
  content?: React.ReactNode
}

export interface ProgressBarItemProps extends BarItemProps {
  value?: string | number
  role?: string
  style?: React.CSSProperties
  content?: React.ReactNode

  'aria-valuenow'?: number
  'aria-valuemin'?: number
  'aria-valuemax'?: number
}

export interface BarProps {
  className?: string
  small?: boolean
  slider?: boolean
  items: ProgressBarItemProps[]
}
