import {CSSProperties, ReactNode} from 'react'

export type LabelType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'

export interface LabelProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  rounded?: boolean
  type?: LabelType
}
