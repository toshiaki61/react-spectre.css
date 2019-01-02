import {ReactNode} from 'react'

import {TooltipPosition} from '@utils/interfaces'

export interface TooltipProps {
  children: ReactNode
  text: string
  position?: TooltipPosition
}
