import * as React from 'react'

import {StyleProps} from '../../interfaces'

export type ToastColorType = 'primary' | 'success' | 'warning' | 'error'

export interface ToastBaseProps extends Partial<StyleProps> {
  /** 'primary' | 'success' | 'warning' | 'error' */
  color?: ToastColorType
}

export interface ToastAttrProps extends ToastBaseProps {
  content: React.ReactNode
  title?: React.ReactNode
  onClearClick?: React.MouseEventHandler
}

export interface ToastChildrenProps extends ToastBaseProps {
  children: React.ReactNode
}

export type ToastProps = ToastAttrProps | ToastChildrenProps
