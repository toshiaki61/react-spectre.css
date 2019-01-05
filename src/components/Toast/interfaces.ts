import {MouseEventHandler, ReactNode} from 'react'

export type ToastColorType = 'primary' | 'success' | 'warning' | 'error'

export interface ToastProps {
  title?: ReactNode
  children: ReactNode
  className?: string
  onClearClick?: MouseEventHandler
  color?: ToastColorType
}
