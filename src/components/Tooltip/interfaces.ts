import {ReactNode} from 'react'

export type TooltipPosition = 'right' | 'left' | 'bottom'

export interface TooltipProps {
  children: ReactNode
  text: string
  position?: TooltipPosition
}
