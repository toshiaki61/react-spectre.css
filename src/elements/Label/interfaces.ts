import * as React from 'react'

export type LabelType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'

export interface LabelProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  rounded?: boolean
  type?: LabelType
}
